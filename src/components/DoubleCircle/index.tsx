import React from "react";
import { RingProgress } from "@ant-design/charts";

const DoubleCircle: React.FC<any> = (props) => {
  const config1 = {
    height: 80,
    width: 80,
    autoFit: false,
    percent: 0.6,
    color: ["l(0) 0:rgba(243,168,19, 0.2) 1:rgba(243,168,19, 1)", "rgba(243,168,19, 0.1)"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: false,
      content: false,
    },
  };

  const config2 = {
    height: 120,
    width: 120,
    autoFit: false,
    percent: 0.4,
    color: ["l(0) 0:rgba(93,128,255, 0.2) 1:rgba(93,128,255, 0.8)", "rgba(93,128,255, 0.1)"],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: false,
      content: false,
    },
  };
  const { innerConfig = config1, outerConfig = config2 } = props;

  return (
    <div style={{ position: "relative", top: '0', minHeight: outerConfig.height, minWidth:outerConfig.width, marginRight: '10px' }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "transparent",
        }}
      >
        <RingProgress {...outerConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          background: "transparent",
        }}
      >
        <RingProgress {...innerConfig} />
      </div>
    </div>
  );
};

export default DoubleCircle;
