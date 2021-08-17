import React from 'react';
import { DualAxes } from '@ant-design/charts';
import { WithContainer } from '../DashBoard/withContainer';
import { cloneDeep, maxBy } from "lodash";

export interface dataItem {
  label: string
  intervalField: number
  lineField: number
}

interface Props {
  config: any
  data: dataItem[]
}

const IntervalAndLine: React.FC<Props> = (props) => {

  const defaultData = [
    {
      label: '2019-03',
      intervalField: 350,
      lineField: 800,
    },
    {
      label: '2019-04',
      intervalField: 900,
      lineField: 600,
    },
    {
      label: '2019-05',
      intervalField: 300,
      lineField: 400,
    },
    {
      label: '2019-06',
      intervalField: 450,
      lineField: 380,
    },
    {
      label: '2019-07',
      intervalField: 470,
      lineField: 220,
    },
  ];
  const defaultConfig = {
    xField: 'label',
    yField: ['intervalField', 'lineField'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        isStack: true,
        seriesField: 'type',
        groupField: 'label',
      },
      {
        geometry: 'line',
        lineStyle: { lineWidth: 2 },
      },
    ],
    theme: {
      colors10: ['l(90) 0:#43E2FF 1:#44A5FF', 'l(90) 0:#FF7E11 1:#F99A13']
    }
  };
  const { config = defaultConfig, data = defaultData } = props
  const config_ = {
    ...defaultConfig,
    ...config
  }
  const intervalData = data[0]
  const lineData = data[1]
  const result = maxBy(intervalData, 'realValue')
  const result2 = maxBy(intervalData, 'value')
  let maxValue = Math.max(result.realValue, result2.value);
  const yAxisMaxValue = parseInt(`${maxValue * 18 / 9}`, 10)
  config_.yAxis.value.max = yAxisMaxValue
  config_.yAxis.value.min = 0

  const lineMaxData = maxBy(lineData, 'percent')
  if (lineMaxData && lineMaxData.percent) {
    const getMaxValue = (value: number) => {
      if (value > 0.1) {
        return Math.ceil(value * 10) / 10
      }
      return Math.ceil(value * 100) / 100
    }
    config_.yAxis.percent.max = getMaxValue(lineMaxData.percent)

    config_.yAxis.percent.min = 0
  }

  return <DualAxes {...config_} data={data} />;
};

export default WithContainer(IntervalAndLine);