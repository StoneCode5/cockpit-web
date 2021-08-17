import React, { useEffect, useState } from "react";
import Container from "./Container";
import request from "../../utils/request";
import { RequestThrottle } from "./utils";

interface Props {
  config: DashBoard.Layer;
  cacheRepeatRequest: boolean 
}

export function WithContainer(WrappedComponent: any) {
  const ContainerFC: React.FC<Props> = (props) => {
    const { config, cacheRepeatRequest } = props;
    const {
      config: ComponentConfig,
      attr,
      data,
      data: { source },
      id,
    } = config;

    const [componentData, setComponentData] = useState(source);
    useEffect(() => {
      // 这一层去改变数据
      const { autoUpdate, api = { url: "", method: "get", staleTime: 5 * 1000, handleRes: (res:any) => res } } = data;
      const { url, method, staleTime, handleRes } = api;

      const appendRequest = (RequestThrottle:any) => {
        RequestThrottle.appendUrl(url);
        request[method](url).then((res) => {
          if (res.code === "00000") {
            RequestThrottle.updateUrlRes(url, res);
            const cData = handleRes? handleRes(res.data) : res.data
            setComponentData(cData);
          }
        });
      }

      if (autoUpdate && typeof autoUpdate === "number") {
        const id = setInterval(() => {
          if (cacheRepeatRequest) {
            const requestUrl = RequestThrottle.getUrlFromUrls(url);
            // 有正在请求的相同的请求
            if (requestUrl) {
              //请求中
              if (requestUrl.status === "pendding") {
                RequestThrottle.subscribe(url, (res: any) => {
                  if (res.code === "00000") {
                    const cData = handleRes? handleRes(res.data) : res.data
                    setComponentData(cData);
                  }
                });
              } else {
                // 有请求成功的相同请求
                const cha = new Date().getTime() - requestUrl.startTime;
                // 该请求还未过有效期
                if (cha >= staleTime) {
                  appendRequest(RequestThrottle)
                } else {
                  // 过了有效期 重新发起请求
                  const { res } = requestUrl;
                  if (res.code === "00000") {
                    const cData = handleRes? handleRes(res.data) : res.data
                    setComponentData(cData);
                  }
                }
              }
            } else {
              // 之前没有过相同的请求
              appendRequest(RequestThrottle)
            }
          } else {
            request[method](url).then((res) => {
              if (res.code === "00000") {
                const cData = handleRes? handleRes(res.data) : res.data
                setComponentData(cData);
              }
            });
          }
        }, autoUpdate);

        return () => {
          clearInterval(id);
        };
      }
    }, []);

    return (
      <Container attr={attr} id={id}>
        <WrappedComponent {...ComponentConfig} data={componentData} />
      </Container>
    );
  };
  return ContainerFC;
}
