// @ts-nocheck
import React, { useEffect, useRef } from "react";
import "./index.less";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import { MapChart, ScatterChart, EffectScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { WithContainer } from "../DashBoard/withContainer";
import { chineseMap } from "../../assets/chinese.js";
import { getCsvNumber } from "../../utils/utils";
import Pointer from "../MapV5/pointer";  // 采用V5的pointer
// import Pointer from "./pointer";

// const southSeaImg = require("");
import southSeaImg from './southSea.svg'

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
  ScatterChart,
  EffectScatterChart,
]);

const Map = (props) => {
  const map = useRef(null);
  const { data: provinceDataOrign, config: { height, width }, } = props;
  const provinceData = provinceDataOrign
    .filter((item) => item.name !== "深圳分公司")
    .sort((a, b) => a.name.localeCompare(b.name));
  const init = () => {
    const BORDER_COLOR = '#2F5F91'
    var chartDom = map.current;
    var myChart = echarts.init(chartDom);
    var option;
    echarts.registerMap("China", chineseMap);

    // var data = [
    //   {
    //     name: "广东分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "云南分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "海南分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "四川分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "湖北分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "江西分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "山东分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "广西分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "贵州分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "深圳分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "上海分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "河南分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "陕西分公司",
    //     value: 10,
    //   },
    //   {
    //     name: "河北分公司",
    //     value: 10,
    //   },
    // ];

    // var geoCoordMap = {
    //   广东分公司: [113.34, 23.13],
    //   云南分公司: [102.72, 25.04],
    //   海南分公司: [110.31, 20.03],
    //   四川分公司: [104.04, 30.63],
    //   湖北分公司: [114.34, 30.56],
    //   江西分公司: [115.85, 28.7],
    //   山东分公司: [117.07, 36.68],
    //   安徽分公司: [117.32, 31.87],
    //   广西分公司: [108.37, 22.83],
    //   贵州分公司: [106.72, 26.57],
    //   深圳分公司: [114.11, 22.56],
    //   上海分公司: [121.37, 31.12],
    //   河南分公司: [113.76, 34.77],
    //   陕西分公司: [108.89, 34.22],
    //   河北分公司: [114.56, 38.02],
    // };

    // const provinceData = [
    //   { name: "广东省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "云南省", value: 2000, value1: 100, value2: 100 },
    //   { name: "海南省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "四川省", value: 2000, value1: 100, value2: 100 },
    //   { name: "江西省", value: 2000, value1: 100, value2: 100 },
    //   { name: "湖北省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "山东省", value: 2000, value1: 100, value2: 100 },
    //   { name: "安徽省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "广西壮族自治区", value: 2000, value1: 100, value2: 100 },
    //   { name: "贵州省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "上海市", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "河南省", value: 2000, value1: 100, value2: 100 },
    //   { name: "陕西省", value: 20057.34, value1: 100, value2: 100 },
    //   { name: "河北省", value: 2000, value1: 100, value2: 100 },
    // ];

    const nameMap = {
      广东省: "广东分公司",
      云南省: "云南分公司",
      海南省: "海南分公司",
      四川省: "四川分公司",
      江西省: "江西分公司",
      湖北省: "湖北分公司",
      山东省: "山东分公司",
      安徽省: "安徽分公司",
      广西壮族自治区: "广西分公司",
      贵州省: "贵州分公司",
      上海市: "上海分公司",
      河南省: "河南分公司",
      陕西省: "陕西分公司",
      河北省: "河北分公司",
    };

    // var convertData = function (data) {
    //   var res = [];
    //   for (var i = 0; i < data.length; i++) {
    //     var geoCoord = geoCoordMap[data[i].name];
    //     if (geoCoord) {
    //       res.push({
    //         name: data[i].name,
    //         value: geoCoord.concat(data[i].value),
    //       });
    //     }
    //   }
    //   return res;
    // };

    // const tooltipRender = (parmas, ticket, callback) => {
    //   const { data } = parmas;
    //   if (data) {
    //     const { name, customerNum, instranceNum, reportNum, signMoney, accreditationNum } = data;
    //     return `<div style="min-width:253px;">
    //     <h3 style="margin:6px 0;font-size: 24px;color: #EFEFF1;margin-bottom: 16px;">${name.slice(
    //       0,
    //       2
    //     )}<span style="font-size: 16px;margin-left: 10px;">（今日）</span></h3>
    //     <div style="display: flex;justify-content: space-between;margin-bottom: 16px;">
    //       <div style="font-size: 18px;color: #EFEFF1; font-weight: 600;">签单金额：</div>
    //       <div style="font-size: 18px;color: #FF9E0D;">${getCsvNumber(
    //         signMoney
    //       )}万</div>
    //     </div>
    //     <div style="display: flex;justify-content: space-between;margin-bottom: 16px;">
    //       <div style="font-size: 18px;color: #EFEFF1; font-weight: 600;">客户数：</div>
    //       <div style="font-size: 18px;color: #FF9E0D;">${getCsvNumber(
    //         customerNum
    //       )}个</div>
    //     </div>
    //     <div style="display: flex;justify-content: space-between;margin-bottom: 16px;">
    //       <div style="font-size: 18px;color: #EFEFF1; font-weight: 600;">保单量：</div>
    //       <div style="font-size: 18px;color: #FF9E0D;"="font-size: 18px;color: #FF9E0D;">${getCsvNumber(
    //         instranceNum
    //       )}件</div>
    //     </div>
    //     <div style="display: flex;justify-content: space-between;margin-bottom: 16px;">
    //       <div style="font-size: 18px;color: #EFEFF1; font-weight: 600;">报案量：</div>
    //       <div style="font-size: 18px;color: #FF9E0D;"="font-size: 18px;color: #FF9E0D;">${getCsvNumber(
    //         reportNum
    //       )}件</div>
    //     </div>
    //     <div style="display: flex;justify-content: space-between;">
    //       <div style="font-size: 18px;color: #EFEFF1; font-weight: 600;">立案量：</div>
    //       <div style="font-size: 18px;color: #FF9E0D;"="font-size: 18px;color: #FF9E0D;">${getCsvNumber(
    //         accreditationNum
    //       )}件</div>
    //     </div>
    //     </div>`;
    //   }
    //   return null;
    // };

    const tooltipRender2 = (parmas, ticket, callback) => {
      const { data } = parmas;
      if (data) {
        const { name, premium, analysisRatio, completeRatio } = data;
        return `<div style="min-width:150px;">
        <h3 style="margin:3px 0;font-size: 16px;color: #EFEFF1;margin-bottom: 12px;">${name.slice(
          0,
          2
        )}(当年)</h3>
        <div style="display: flex;justify-content: space-between;margin-bottom: 12px;">
          <div style="font-size: 14px;color: #EFEFF1; font-weight: 600;">保费收入：</div>
          <div style="font-size: 14px;color: #FF9E0D;">${getCsvNumber(
            premium
          )}万</div>
        </div>
        <div style="display: flex;justify-content: space-between;margin-bottom: 12px;">
          <div style="font-size: 14px;color: #EFEFF1; font-weight: 600;">综合成本率：</div>
          <div style="font-size: 14px;color: #FF9E0D;">${analysisRatio}%</div>
        </div>
        <div style="display: flex;justify-content: space-between;margin-bottom: 0px;">
          <div style="font-size: 14px;color: #EFEFF1; font-weight: 600;">总达成率：</div>
          <div style="font-size: 14px;color: #FF9E0D;">${completeRatio}%</div>
        </div>
        </div>`;
      }
      return null;
    };

    const handleProvinceData = (data: any[]) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        data[i] = {
          ...element,
          // 有数据的省份的颜色
          itemStyle: {
            borderColor: "#78BFE5",
            areaColor: "#337AC2",
            // areaColor: "#093871 #164390",
          },
        };
      }
      return data;
    };

    const AREA_COLOR = '#05255A'

    option = {
      tooltip: {
        trigger: "item",
        formatter: tooltipRender2,
        backgroundColor: "rgba(34,79,126, 0.51)",
        borderColor: "rgba(120,191,229,0.62)",
        borderWidth: 1,
        // padding: 20,
        padding: 12,
        position: (point, parmas) => {
          const {data: {name}} = parmas
          if (name === '河北分公司' || name === '山东分公司') {
            return 'bottom'
          }
          if (name === '河南分公司' || name === '陕西分公司') {
            return 'left'
          }
          return 'top'
        },
        extraCssText:
          "box-shadow: 0 3px 13px 0 rgba(0,0,0,0.1);backdrop-filter: blur(5px);",
      },
      geo: {
        map: "China",
        // 默认颜色
        itemStyle: {
          borderColor: "#8BD6EB",
          areaColor: AREA_COLOR,
        },
        label: {
          show: false,
        },
      },
      series: [
        {
          name: "香港18区人口密度",
          type: "map",
          mapType: "China", // 自定义扩展图表类型
          label: {
            show: false,
          },
           // 默认颜色
          itemStyle: {
            borderColor: BORDER_COLOR,
            areaColor: AREA_COLOR,
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: "#FF9E0D",
            },
          },
          data: handleProvinceData(provinceData),
          nameMap,
        },
        // {
        //   name: "Top 5",
        //   type: "effectScatter",
        //   coordinateSystem: "geo",
        //   data: convertData(data),
        //   encode: {
        //     value: 2,
        //   },
        //   symbolSize: 10,
        //   showEffectOn: "render",
        //   rippleEffect: {
        //     brushType: "stroke",
        //   },

        //   hoverAnimation: true,
        //   label: {
        //     formatter: "{b}",
        //     position: "right",
        //     show: false,
        //   },
        //   itemStyle: {
        //     color: "#FF9E0D",
        //     shadowBlur: 10,
        //     shadowColor: "#333",
        //   },
        //   zlevel: 1,
        // },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    let nowIndex = 0;

    const showToolTips = () => {
      const dataNum = provinceData.length;
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: nowIndex - 1 < 0 ? dataNum - 1 : nowIndex - 1,
      });

      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: nowIndex,
      });
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: nowIndex,
      });
      nowIndex += 1;
      if (nowIndex === dataNum) {
        nowIndex = 0;
      }
    };
    setTimeout(() => {
      showToolTips();
    }, 2000)
    
    setInterval(() => {
      showToolTips();
    }, 1000 * 10);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div
        ref={map}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          background: "transparent",
          // background: "red"
        }}
      />
      <div style={{ position: "absolute", top: `${height - 170}px`, right: "161px" }}>
        <img src={southSeaImg} alt="南海" width="72" height="100" />
      </div>
      <Pointer />
    </>
  );
};

export default WithContainer(Map);
