import React, { useState, useEffect } from "react";
import "./round.less";
import { animateValue } from "../../utils/utils";

const defaultConfig = {
  width: 80,
  labelColor: "#EFEFF1",
  labelSize: 14,
  labelMargin: "0 15px",
  textColor: "#FEA406",
  textSize: 18,
  roundType: "double", // single || double
  loopWidth: 6,
  outerColor: ["#75F2FF", "#3BD3FF"],
  insideColor: ["#FF6E76", "#FF808A"],
};
const RoundItemComponent: React.FC<any> = (props) => {
  const {
    data = { label: "合计", value: 2980 },
    config = defaultConfig,
  } = props;
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      animateValue(current, data.value || 0, 500, (curr) => {
        setCurrent(curr)
      })
    }, 1000);
  }, [data]);
  return (
    <div className="item">
      <span
        style={{
          fontSize: `${config.labelSize}px`,
          // color: config.labelColor,
          margin: config.labelMargin,
        }}
      >
        {data.label}
      </span>
      <div
        className="item-outer"
        style={{
          width: `${config.width}px`,
          height: `${config.width}px`,
          // border: `${config.loopWidth}px solid ${config.outerColor[0]}`,
          // borderRadius: `50%`,
          //   borderImage: `linear-gradient(${config.outerColor[0]},${config.outerColor[1]}) 30 30`,
        }}
      >
        {/* {config.roundType === "double" ? (
          <div
            className="item-outer-inside"
            style={{
              width: `${config.width - config.loopWidth * 3}px`,
              height: `${config.width - config.loopWidth * 3}px`,
              border: config.insideColor
                ? `${config.loopWidth}px solid ${config.insideColor[0]}`
                : "none",
              borderRadius: `50%`,
              //   borderImage: `linear-gradient(${config.outerColor[0]},${config.outerColor[1]}) 30 30`,
            }}
          >
            <div
              style={{
                fontSize: config.textSize,
                color: config.textColor,
              }}
            >
            {String(current).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </div>
          </div>
        ) : ( */}
        <div
          style={{
            fontSize: config.textSize,
            // color: config.textColor,
          }}
        >
          {String(current).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default RoundItemComponent;
