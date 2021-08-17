import React, { useEffect } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import * as echarts from "echarts";

const Column3: React.FC<any> = (props) => {
  const { data } = props;

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
      textStyle: {
        color: "#C9EAFF",
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "dashed",
        },
      },
    },
    yAxis: {
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
        label: {
          show: true,
          position: "insideTopRight",
          offset: [3, -16],
          color: "#5D80FF",
          fontSize: 11,
        },
        emphasis: {
          focus: "series",
        },
        data: data[1],
        barWidth: 5,
        itemStyle: {
          barBorderRadius: 3,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(93,128,255,0.80)" },
            { offset: 1, color: "rgba(93,128,255,0.10)" },
          ]),
        },
      },
      {
        name: "B类",
        type: "bar",
        stack: "total",
        label: {
          show: true,
          position: "insideTopRight",
          offset: [3, -16],
          color: "#9EFFF9",
          fontSize: 11,
        },
        emphasis: {
          focus: "series",
        },
        data: data[2],
        barWidth: 5,
        itemStyle: {
          barBorderRadius: 3,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(158,255,249,0.80)" },
            { offset: 1, color: "rgba(101,255,241,0.10)" },
          ]),
        },
      },
    ],
  };

  useEffect(() => {
    let element = document.getElementById("column3");
    let myChart = echarts.init(element as HTMLDivElement);
    let option = defaultOption;
    myChart.setOption(option);
  });

  return <div id={"column3"} style={{ width: "100%", height: "100%" }} />;
};

export default WithContainer(Column3);
