import React from "react";
import { RingProgress } from "@ant-design/charts";
import { WithContainer } from "../DashBoard/withContainer";

const dataDefault = 0;
const configDefault = {
  height: 140,
  width: 140,
  autoFit: false,
  percent: 0.65,
  color: ["l(0) 0:#FFCD1E 1:#FF9E0D", "rgba(255,255,255, 0.4)"],
  style: {
    fill: "red",
    fillOpacity: 0.5,
    stroke: "black",
    lineWidth: 1,
    lineDash: [4, 5],
    strokeOpacity: 0.7,
    shadowColor: "black",
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: "pointer",
  },
  radius: 1,
  innerRadius: 0.7,
  statistic: {
    title: {
      style: {
        color: "rgba(255,255,255, 0.4)",
        fontSize: "12px",
        lineHeight: "12px",
      },
    },
    content: {
      style: {
        color: "#FF9E0D",
        fontSize: "24px",
        lineHeight: "24px",
      },
      customHtml: (
        container: HTMLElement,
        view: any,
        datum: any,
        data: any
      ) => {
        return `<div>${
          datum.percent * 100
        }<span style="font-size:16px">%<span></div>`;
      },
    },
  },
};

const LoopComponent: React.FC<any> = (props) => {
  const percent = props.data === undefined ? dataDefault : props.data;
  const config = props || configDefault;
  return <RingProgress {...config} percent={percent} />;
};

export default WithContainer(LoopComponent);
