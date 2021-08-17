import React, { useEffect, useState, Suspense } from "react";
import { debounce, cloneDeep } from "lodash";
import Loading from "./Loading";
import Error from "./Error";
import { request, importView } from "./utils";

import "./index.less";
interface Props {
  config: DashBoard.Config;
}

type ApiObjItem = RequestInfo & {
  url: string;
  method: DashBoard.Method;
}


interface RequestInfo {
  id: string;
  handleRes: string | Function
}

interface RequestAllInfoResult {
  requestInfos: RequestInfo[];
  allData: PromiseSettledResult<any>[];
}


const DashBoard = (props: Props) => {
  const {
    config: configProps,
    config: { config: pageConfig },
  } = props;
  const { display, backgroundColor, backgroundImage, width, height, cacheRepeatRequest = true } =
    pageConfig;
  const [isReady, setIsReady] = useState(false);
  const [showError, setShowError] = useState(false)
  // const [config, setConfig] = useState(configProps);
  const config = cloneDeep(configProps);
  const [views, setViews] = useState<any[]>([]);

  // 生成一个api信息数组
  const getApiObjArr = (
    fLayers: DashBoard.Layers | undefined
  ): ApiObjItem[] => {
    if (fLayers) {
      const result: ApiObjItem[] = [];
      Object.keys(fLayers).forEach((key) => {
        // zindex中的才发请求
        const { zIndexList } = config.config;
        const findItem = zIndexList.find((item: any) => item.id === key);
        if (findItem) {
          const layerItem = fLayers[key];
          if (layerItem.data.api && layerItem.data.api.url) {
            result.push({
              url: layerItem.data.api.url,
              method: layerItem.data.api.method,
              id: key,
              handleRes: layerItem.data.api.handleRes || ""
            });
          }
        }
      });
      return result;
    }
    return [];
  };

  // 请求数据
  const requestAllInfo = async (
    apisObjs: ApiObjItem[]
  ): Promise<RequestAllInfoResult> => {
    return new Promise((resolve) => {
      const requestArr: Promise<any>[] = [];
      const requestInfos: RequestInfo[] = [];
      if (cacheRepeatRequest) {
        // 重复请求不再请求
        const urls:any[] = []
        apisObjs.forEach((item) => {
          const urlIndex = urls.indexOf(item.url)
          if (urlIndex === -1) {
            urls.push(item.url)
            requestArr.push(request[item.method](item.url));
          } else {
            urls.push(urlIndex)
            requestArr.push( Promise.resolve({status: 'cached', urlIndex}))
          }
          
          const itemObj = {
            id: item.id,
            handleRes: item.handleRes
          }
          requestInfos.push(itemObj);
        });
        Promise.allSettled(requestArr).then((result) => {
          setIsReady(true);
          for (let i = 0; i < result.length; i++) {
            const item = result[i];
            if (item.status === 'fulfilled') {
              const {status, urlIndex} = item.value
              if (status === 'cached') {
                result[i] = result[urlIndex]
              }
            }
          }
          resolve({
            requestInfos,
            allData: result,
          });
        });
      } else {
        apisObjs.forEach((item) => {
          requestArr.push(request[item.method](item.url));
          const itemObj = {
            id: item.id,
            handleRes: item.handleRes
          }
          requestInfos.push(itemObj);
        });
        Promise.allSettled(requestArr).then((result) => {
          setIsReady(true);
          resolve({
            requestInfos,
            allData: result,
          });
        });
      }

    });
  };

  // 动态加载组件
  async function loadViews(fConfig: DashBoard.Config) {
    const zIndexList = fConfig.config.zIndexList;
    const {
      scenes: [{ layers }],
    } = config;
    const componentPromises = zIndexList.map(async (zIndexItem) => {
      const layer = layers[zIndexItem.id];
      if (!layer) return;
      const View = await importView(layer.requirePath);
      return <View key={Math.random()} config={layer || {}} cacheRepeatRequest={cacheRepeatRequest} />;
    });
    Promise.all(componentPromises).then((views) => {
      setViews(views);
    });
  }

  // 更新配置的相关数据
  const updateConfigAndLoadViews = async (
    fApiObjArr: ApiObjItem[],
    fConfig: DashBoard.Config
  ) => {
    const fLayers = fConfig?.scenes[0].layers;
    if (fLayers) {
      if (fApiObjArr.length !== 0) {
        const { requestInfos, allData } = await requestAllInfo(fApiObjArr);
        let isError = false;
        for (let i = 0; i < allData.length; i++) {
          if (allData[i].status === "rejected") {
            // 显示服务器错误
            isError = true;
            setShowError(true)
            break;
          }
        }
        if (!isError) {
          allData.forEach((item: any, index: number) => {
            if (item.value.code === "00000") {
              const {id, handleRes} = requestInfos[index]
              let dataSource = item.value.data
              // 处理后端返回
              if (handleRes && typeof(handleRes) === 'function') {
                dataSource = handleRes(item.value.data)
              }

              fLayers[id].data.source = dataSource;
            }
          });
          loadViews(fConfig);
        }
      } else {
        setIsReady(true);
        loadViews(fConfig);
      }
    }
  };

  const resizeCenter = () => {
    const boardRatio = width / height;
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    const ratio = ww / wh;
    let scale = 1;
    // 如果是屏幕较宽，用等比缩放高度铺满
    if (ratio > boardRatio) {
      scale = wh / height;
      // 如果是屏幕较窄，用等比缩放宽度铺满
    } else {
      scale = ww / width;
    }

    const container = document.querySelector("#container") as HTMLElement;
    if (container) {
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.transform = `scale(${scale})`;
      container.style.transformOrigin = "left top";
      container.style.marginLeft = `${(ww - width * scale) / 2}px`;
      container.style.marginTop = `${(wh - height * scale) / 2}px`;
      if (backgroundColor) {
        container.style.backgroundColor = backgroundColor;
      }
      if (backgroundImage) {
        container.style.backgroundImage = `url(${backgroundImage})`;
        container.style.backgroundSize = `100% 100%`;
      }
    }
  };

  const init = async () => {
    let layers = null;

    const resize = () => {
      if (display === 2) {
        // 等比缩放高度铺满
        resizeCenter();
      }
    };

    const debounceResize = debounce(resize, 100);

    window.addEventListener("resize", () => {
      debounceResize();
    });

    resize();

    layers = config?.scenes[0].layers;

    const apiObjArr = getApiObjArr(layers);

    updateConfigAndLoadViews(apiObjArr, config);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="layout">
        {showError && <Error />}
        {!isReady && <Loading />}
        {isReady && views}
      </div>
    </Suspense>
  );
};

export default DashBoard;
