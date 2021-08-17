import React from "react";
import { RadialBar } from "@ant-design/charts";
import { WithContainer } from "../DashBoard/withContainer";

const RadialComponent: React.FC<any> = (props) => {
  const defaultConfig = {
    padding: 0,
    autoFit: false,
    xField: "name",
    yField: "value",
    maxAngle: 360,
    radius: 1,
    innerRadius: 0.75,
    colorField: "name",
    color: ["#ff9e0d", "#4c87ff"],
    barBackground: {
      style: {
        stroke: "transparent",
        fill: "#fff",
        fillOpacity: 0.3,
      },
    },
    yAxis: false,
    xAxis: false,
    toolTip: false,
    // tooltip: {
    //   itemTpl: `<li class="g2-tooltip-list-item" style="min-width: 165px;display: flex;justify-content: space-between;">
    //                   <div style="color: #333;font-size: 14px;font-weight: 600;"><span style="color: {color};">●</span> {name}达成：</div>
    //                   <div style="font-size: 14px;">{value} 万</div>
    //               </li> `,
    //   formatter: (datum: any) => {
    //     return {
    //       name: datum.name,
    //       value: datum.value
    //         .toFixed()
    //         .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    //     };
    //   },
    //   showTitle: false,
    // },
  };
  const {
    data = { targetSum: 10000, premiumSum: 1000 },
    config = defaultConfig,
  } = props;
  const defaultData = [
    {
      name: "当前",
      value: Number(data.premiumSum) || 0,
    },
    {
      name: "目标",
      value: Number(data.targetSum) || 1,
    },
  ];
  const annotations = [
    {
      type: "html",
      position: ["50%", "50%"] as [string, string],
      html: () => {
        return `<div style="transform:translate(-50%,-50%);color:#ff9e0d;font-size: 22px;font-weight: 600;">
                ${String(data.premiumSum  || 0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </div>`;
      },
    },
  ];
  const fullConfig = {
    ...config,
    annotations: annotations,
    data: defaultData,
  };
  return <RadialBar {...fullConfig} />;
};

export default WithContainer(RadialComponent);
