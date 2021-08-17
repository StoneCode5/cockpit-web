import React from 'react';
import { Line } from '@ant-design/charts';
import { cloneDeep, maxBy } from "lodash";
import { WithContainer } from "../DashBoard/withContainer";

interface Props {
  config: any
  data: any[]
}

const LineComponent: React.FC<Props> = (props) => {
  var dataDefault = [
    {
      month: '1991',
      value: 3,
    },
    {
      month: '1992',
      value: 4,
    },
    {
      month: '1993',
      value: 3.5,
    },
    {
      month: '1994',
      value: 5,
    },
    {
      month: '1995',
      value: 4.9,
    },
    {
      month: '1996',
      value: 6,
    },
    {
      month: '1997',
      value: 7,
    },
    {
      month: '1998',
      value: 9,
    },
    {
      month: '1999',
      value: 13,
    },
  ];
  var configDefault = {
    xField: 'month',
    yField: 'value',
    yAxis: {},
    label: {},
    tooltip: false,
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
    point: {
      size: 10,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    // limitInPlot: false,
  };
  const {data = dataDefault, config = configDefault} = props

  const config_ = cloneDeep(config)
  const result = maxBy(data, 'value')
  if (result && result.value) {
    const maxValue = result.value
    const yAxisMaxValue = parseInt(`${maxValue * 4 / 3}`, 10)
    config_.yAxis.max = yAxisMaxValue
  }
 
  return <Line {...config_} data={data} />;
};

export default WithContainer(LineComponent);