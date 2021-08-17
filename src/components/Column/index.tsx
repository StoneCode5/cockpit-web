import React from "react";
import { Column } from "@ant-design/charts";
import { cloneDeep, maxBy } from "lodash";
import { WithContainer } from "../DashBoard/withContainer";

const configData = [
  {
    label: "湖南",
    value: 3853,
  },
  {
    label: "广西",
    value: 5622,
  },
  {
    label: "广东",
    value: 6361,
  },
  {
    label: "四川",
    value: 1456,
  },
];
const configDefault = {
  xField: "label",
  yField: "value",
  yAxis: {
    grid: {
      line: {
        style: {
          stroke: "#fff",
          lineWidth: 1,
          lineDash: [1, 4],
          strokeOpacity: 0.7,
          shadowColor: "black",
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer",
        },
      },
    },
  },
  xAxis: {
    label: {
      style: {
        fill: "#fff",
        opacity: 0.5,
        fontSize: 10,
      },
    },
  },
  maxColumnWidth: 15,
  label: {
    style: {
      fill: "#ff9e0d",
      opacity: 1,
      fontSize: 10,
    },
    position: "top",
  },
  columnBackground: {
    style: {
      fill: "#fff",
      fillOpacity: 0,
    },
  },
  color: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
  meta: {
    label: { alias: "城市" },
    value: { alias: "保费" },
  },
  tooltip: false,
};

const ColumnComponent: React.FC<any> = (props) => {
  let { data = configData, config = configDefault } = props;
  const config_ = cloneDeep(config);
  if (data.length > 0) {
    const { value: maxValue } = maxBy(data, "value");
    const yAxisMaxValue = parseInt(`${(maxValue * 10) / 9}`, 10);
    config_.yAxis.max = yAxisMaxValue;
  }
  return <Column {...config_} data={data} />;
};

export default WithContainer(ColumnComponent);
