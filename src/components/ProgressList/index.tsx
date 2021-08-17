import React, { useState, useEffect } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";
import ProgressItem from "./item";


const defaultData = [
    { label: "深圳", current: 168, target: 200 },
    { label: "广东", current: 118, target: 200  },
    { label: "广西", current: 88, target: 200  },
    { label: "云南", current: 17, target: 200  },
    { label: "贵州", current: 66, target: 200  },
    { label: "海南", current: 168, target: 200  },
    { label: "四川", current: 118, target: 200  },
    { label: "上海", current: 88, target: 200  },
    { label: "内蒙古", current: 17, target: 200  },
    { label: "河南", current: 66, target: 200  },
    { label: "江西", current: 168, target: 200  },
    { label: "新疆", current: 168, target: 200  }
];
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
    target:{
        fontSize: '10px',
        color: '#4c87ff'
    },
    current:{
        fontSize: '10px',
        color: '#ff9e0d'
    }
  },
};
const LoopComponent: React.FC<any> = (props) => {
  const { data = defaultData, config = defaultConfig } = props;
  const [maxInt, setMaxInt] = useState(100);
  useEffect(() => {
    const compare = function (obj1: any, obj2: any) {
      const val1 = Number(obj1.target);
      const val2 = Number(obj2.target);
      if (val1 > val2) {
        return -1;
      } else if (val1 < val2) {
        return 1;
      } else {
        return 0;
      }
    };
    const max = JSON.parse(JSON.stringify(data)).sort(compare)[0].target;
    setMaxInt(max);
  }, [data]);
  return (
    <div className="list">
      {data && data.map((item: any, index: number) => (
        <ProgressItem data={item} config={config} index={index} maxInt={maxInt} key={index}></ProgressItem>
          // <div
          //   key={item.label}
          //   className="list-item"
          //   style={{ 
          //     width: `${config.width}px`, 
          //     height: `${config.height}px`,
          //     margin: `${index<data.length/2?'0 30px 12px 0':'0  0 12px 0'}`
          //   }}
          // >
          //   <span style={{
          //       fontSize: `${config.labelStyle.fontSize}px`,
          //       color: config.labelStyle.color,
          //       opacity: config.labelStyle.opacity,
          //       width: `${config.labelStyle.width}px`,
          //   }}>{item.label.slice(0, 2)}</span>
          //   <div className="list-item-box" style={{
          //       background: config.ratioStyle.max.background,
          //       width: `${config.ratioStyle.max.width}px`,
          //       height: `${config.height}px`,
          //   }}>
          //     <div
          //       className="list-item-box-target"
          //       style={{
          //         background: config.ratioStyle.target.color,
          //         height: config.height,
          //         width: `${ item.target / maxInt * config.ratioStyle.max.width }px`,
          //       }}
          //     ></div>
          //     <div
          //       className="list-item-box-current"
          //       style={{
          //         background: config.ratioStyle.current.color,
          //         height: config.height,
          //         width: `${ item.current / maxInt * config.ratioStyle.max.width }px`,
          //       }}
          //     ></div>
          //   </div>
          //   <div className="list-item-num" style={{ ...config.valueStyle}}>
          //     <div style={config.ratioStyle.current}>{String(item.current).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
          //     <div style={config.ratioStyle.target}>{String(item.target).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</div>
          //   </div>
          // </div>
        ))}
    </div>
  );
};

export default WithContainer(LoopComponent);
