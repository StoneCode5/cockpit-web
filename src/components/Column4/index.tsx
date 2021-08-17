import React, { useEffect, useRef } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import * as echarts from "echarts";

const Column4: React.FC<any> = (props) => {

  const { data, config,  } = props;
  const {type, width, height} = config
  const boxRef = useRef(null)
  const defaultOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      right: "0",
      top: "0",
      textStyle: {
        color: "#C9EAFF",
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "20%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "dashed",
        },
      },
    },
    xAxis: {
      type: "category",
      data: data[0],
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "A类",
        type: "bar",
        stack: "total",
        // label: {
        //   show: true,
        //   position: "insideTopRight",
        //   offset: [3, -16],
        //   color: "#5D80FF",
        //   fontSize: 11,
        // },
        emphasis: {
          focus: "series",
        },
        data: data[1],
        // barWidth: 5,
        itemStyle: {
          // barBorderRadius: 3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(93,128,255,0.80)" },
            { offset: 1, color: "rgba(93,128,255,0.10)" },
          ]),
          // color: 'rgba(93,128,255,0.80)'
        },
      },
      {
        name: "B类",
        type: "bar",
        stack: "total",
        label: {
          show: true,
          // show: false,
          position: "top",
          offset: [0, 0],
          fontSize: 11,
          formatter: (params: any) => {
            const { dataIndex } = params;
            return `{a|${data[2][dataIndex]}}\n\n{b|${data[1][dataIndex]}}`
          },
          rich: {
            a: {
              color: type === 1 ? "#9EFFF9" : "#F49613",
              lineHeight: 1
            },
            b: {
              color: "#5D80FF",
            },
          },
        },
        emphasis: {
          focus: "series",
        },
        data: data[2],
        // barWidth: 5,
        itemStyle: {
          // barBorderRadius: 3,
          color: type === 1 ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(158,255,249,0.80)" },
            { offset: 1, color: "rgba(158,255,249,0.30)" },
          ]) : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#F49613" },
            { offset: 1, color: "rgba(249,154,19,0.30)" },
          ]),
          // color: "rgba(158,255,249,0.80)",
        },
        
      },
    ],
  };

  useEffect(() => {
    let element = boxRef.current;
    let myChart = echarts.init(element as any);
    let option = defaultOption;
    myChart.setOption(option);
  }, []);

  return <div ref={boxRef} style={{ width, height }} />;
};

export default WithContainer(Column4);
