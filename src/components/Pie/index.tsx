import React from "react";
import { Pie } from "@ant-design/charts";
import { WithContainer } from "../DashBoard/withContainer";

interface DataItem {
  type: string;
  value: number;
}

interface Props {
  config: any;
  data: DataItem[];
}

const PieComponent: React.FC<Props> = (props) => {
  const defaultData = [
    {
      type: "分类一",
      value: 42,
    },
    {
      type: "分类二",
      value: 58,
    },
  ];
  const defaultConfig = {
    appendPadding: 10,
    data: defaultData,
    angleField: "value",
    colorField: "type",
    color: ({ type }: DataItem) => {
      if (type === "分类二") {
        return "#1F3357";
      }
      return "#FF9E0D";
    },
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}%",
      style: {
        textAlign: "center",
        fontSize: 18,
        fill: "#1F3357",
      },
    },
    legend: false,
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#FF9E0D",
        },
        formatter: function formatter() {
          return "123,123.12";
        },
      },
    },
  };
  const { data = defaultData, config = defaultConfig } = props;

  return <Pie {...config} data={data} />;
};

export default WithContainer(PieComponent);
