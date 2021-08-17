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
import Pointer from "./pointer";
import Marker from './marker'
// const southSeaImg = require("");
import southSeaImg from "./southSea.svg";

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
  const {
    data: provinceDataOrign,
    config: { height, width },
  } = props;
  const provinceData = provinceDataOrign
    .filter((item) => item.name !== "深圳分公司")
    .sort((a, b) => a.name.localeCompare(b.name));
  const init = () => {
    const BORDER_COLOR = "#2F5F91";
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

    const computedAreaColor = (val: number) => {
      const linearRed = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#CD545C" },
        { offset: 1, color: "#221A3F" },
      ])

      const linearOrange = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#F99912" },
        { offset: 1, color: "#212237" },
      ])
      
      const linearBlue = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#4965D1" },
        { offset: 1, color: "#0F1C45" },
      ])

      const linearCyan = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#7CCBCF" },
        { offset: 1, color: "#122C4E" },
      ])

      switch (true) {
        case val > 105:
          return linearRed ;
        case val >= 100 && val <= 105:
          return linearOrange;
        case val >= 95 && val <= 100:
          return linearBlue
        case val <= 95:
          return linearCyan;
        default:
          return linearCyan;
      }
    };

    const handleProvinceData = (data: any[]) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        
        data[i] = {
          ...element,
          // 有数据的省份的颜色
          itemStyle: {
            borderColor: COLOR.BORDER_MARKED,
            areaColor: computedAreaColor(parseFloat(element.value, 10)),
            // areaColor: COLOR.BORDER_MARKED,
            // areaColor: '#111111',
            // areaColor: "#093871 #164390",
          },
        };
      }
      return data;
    };

    const COLOR = {
      AREA_DEFAULT: "#0D1A49", // 区域默认颜色
      BORDER_DEFAULT: "#5D80FF", // 区域边框默认颜色
      // AREA_MARKED: '#FF9E0D', // 地图标注区域的颜色
      AREA_MARKED: "#05255A", // 标注区域的颜色
      // BORDER_MARKED: "#2F5F91", // 标注区域边框颜色
      BORDER_MARKED: '#78BFE5',
      AREA_ACTIVE: "red", // 选中区域颜色
    };
    option = {
      geo: {
        map: "China",
        // 默认颜色
        itemStyle: {
          borderColor: COLOR.BORDER_DEFAULT,
          areaColor: COLOR.AREA_DEFAULT,
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
            borderColor: COLOR.BORDER_DEFAULT,
            areaColor: COLOR.AREA_DEFAULT,
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: COLOR.AREA_ACTIVE,
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
      <div
        style={{
          position: "absolute",
          // top: `${height - 170}px`,
          top: '223px',
          right: "186px",
        }}
      >
        <img src={southSeaImg} alt="南海" style={{transform: 'scale(0.7)',}} width="72" height="100" />
      </div>
      <Marker />
      <Pointer />
    </>
  );
};

export default WithContainer(Map);
