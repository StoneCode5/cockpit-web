import React, { useState, useEffect } from "react";
import "./index.less";
import { animateValue } from "../../utils/utils";

const defaultConfig = {
  height: 14,
  width: 300,
  labelStyle: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.4,
    width: 36,
  },
  ratioStyle: {
    max: {
      background: "rgba(255,255,255, 0.1)",
      width: 150,
    },
    target: {
      fontSize: "10px",
      color: "#4c87ff",
    },
    current: {
      fontSize: "10px",
      color: "#ff9e0d",
    },
  },
};
const ProgressItemComponent: React.FC<any> = (props) => {
  const {
    data = { label: "广东", current: 118, target: 200 },
    config = defaultConfig,
    maxInt = 100,
    index = 0,
  } = props;
  const [current, setCurrent] = useState<number>(0);
  const [target, setTarget] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      animateValue(current, data.current || 0, 500, (curr) => {
        setCurrent(curr);
      });
      animateValue(target, data.target || 0, 500, (curr) => {
        setTarget(curr);
      });
    }, 1000);
  }, [data]);
  return (
    <div
      key={data.label}
      className="list-item"
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        margin: `${index < data.length / 2 ? "0 30px 12px 0" : "0  0 12px 0"}`,
      }}
    >
      <span
        style={{
          fontSize: `${config.labelStyle.fontSize}px`,
          color: config.labelStyle.color,
          opacity: config.labelStyle.opacity,
          width: `${config.labelStyle.width}px`,
        }}
      >
        {data.label.slice(0, 2)}
      </span>
      <div
        className="list-item-box"
        style={{
          background: config.ratioStyle.max.background,
          width: `${config.ratioStyle.max.width}px`,
          height: `${config.height}px`,
        }}
      >
        <div
          className="list-item-box-target"
          style={{
            background: config.ratioStyle.target.color,
            height: config.height,
            width: `${(data.target / maxInt) * config.ratioStyle.max.width}px`,
          }}
        ></div>
        <div
          className="list-item-box-current"
          style={{
            background: config.ratioStyle.current.color,
            height: config.height,
            width: `${(data.current / maxInt) * config.ratioStyle.max.width}px`,
          }}
        ></div>
      </div>
      <div className="list-item-num" style={{ ...config.valueStyle }}>
        <div style={config.ratioStyle.current}>{String(current).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
        <div style={config.ratioStyle.target}>{String(target).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
      </div>
    </div>
  );
};

export default ProgressItemComponent;
