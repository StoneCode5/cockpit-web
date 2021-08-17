import React, { useState, useEffect } from "react";
import { Mix } from "@ant-design/charts";
import { maxBy } from "lodash";
import { WithContainer } from "../DashBoard/withContainer";

interface DataItem {
  label: string;
  value: number;
}

const ColumnComponent: React.FC = (props: any) => {
  const { data = [] } = props;
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    setMaxValue(maxBy(data, "value").value);
  }, [data]);

  var config = {
    tooltip: { show: false },
    views: [
      {
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.85,
            y: 1,
          },
        },
        data,
        axes: {
          label: {
            label: {
              style: {
                fill: 'rgba(255, 255, 255, 0.4)'
              }
            },
            line: {
              style: {
                stroke: 'rgba(255, 255, 255, 0.1)'
              }
            },
            tickLine: null,
            subTickLine: null,
          },
          value: {
            label: {
              style: {
                fill: 'rgba(255, 255, 255, 0.4)'
              }
            },
            line: null,
            grid: {
              line: {
                style: {
                  stroke: 'rgba(255, 255, 255, 0.1)',
                }
              }
            }
          },
        },
        coordinate: { cfg: { isTransposed: true } },
        meta: {
          label: {
            formatter: function (v: string) {
              return v.slice(0, 2);
            },
          },
          value: {
            max: Math.ceil((maxValue * 3.6) / 3),
          },
        },
        geometries: [
          {
            type: "interval",
            xField: "label",
            yField: "value",
            tooltipFields: false,
            mapping: {
              style: {
                fill: "l(0) 0:#FF7E11 1:#F99A13",
              },
            },
          },
        ],
      },
      {
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.95,
          },
        },
        data: data.map((v: DataItem) => ({
          ...v,
          value: maxValue,
        })),
        axes: {
          value: false,
          label: false,
        },
        meta: {
          value: {
            max: Math.ceil((maxValue * 3.6) / 3),
          },
        },
        coordinate: { cfg: { isTransposed: true } },
        geometries: [
          {
            type: "interval",
            xField: "label",
            yField: "value",
            tooltipFields: false,
            mapping: {
              style: {
                fillOpacity: 0,
              },
            },
            label: {
              position: "right" as const,
              offset: 30,
              style: {
                fill: "#FF9E0D",
              },
              // @ts-ignore
              formatter: function formatter(a, b, c) {
                return data[c].value
              }
            },
          },
        ],
      },
    ],
  };
  // @ts-ignore
  return <Mix {...config} />;
};

export default WithContainer(ColumnComponent);
