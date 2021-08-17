import React, { useEffect } from 'react';
import { Area } from '@ant-design/charts';
import { maxBy, cloneDeep, minBy } from 'lodash';
import { WithContainer } from "../DashBoard/withContainer";
import './index.less';

interface Props {
  data: [],
  config: any
}

const AreaCom: React.FC<Props> = (props) => {
  const dataDefault = [
    {
      date: '01',
      value: 52,
      type: '近7日话务量'
    },
    {
      date: '01',
      value: 25,
      type: '近7日接通量'
    },
    {
      date: '02',
      value: 23,
      type: '近7日话务量'
    },
    {
      date: '02',
      value: 57,
      type: '近7日接通量'
    },
    {
      date: '03',
      value: 42,
      type: '近7日话务量'
    },
    {
      date: '03',
      value: 25,
      type: '近7日接通量'
    },
    {
      date: '04',
      value: 38,
      type: '近7日话务量'
    },
    {
      date: '04',
      value: 18,
      type: '近7日接通量'
    },
    {
      date: '05',
      value: 48,
      type: '近7日话务量'
    },
    {
      date: '05',
      value: 38,
      type: '近7日接通量'
    },
    {
      date: '06',
      value: 25,
      type: '近7日话务量'
    },
    {
      date: '06',
      value: 35,
      type: '近7日接通量'
    },
    {
      date: '07',
      value: 52,
      type: '近7日话务量'
    },
    {
      date: '07',
      value: 52,
      type: '近7日接通量'
    },
  ];
  var configDefault = {
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    color: ['#27E0FE', '#FF6600'],
    isStack: false,
    xAxis: {
      label: null,
      line: {
        style: {
          stroke: 'rgba(255, 255, 255, 0.1)'
        }
      },
      tickLine: null,
      subTickLine: null,
    },
    yAxis: {
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
      },
      max: parseInt(`${maxBy(dataDefault, 'value').value * 3.7 / 3}`, 10)
    },
    legend: {
      position: 'top-right' as const,
      marker: {
        symbol: 'circle' as const,
        style: {
          fillOpacity: 1,
        }
      },
      itemName: {
        style: {
          fill: 'rgba(255, 255, 255, 0.4)'
        }
      }
    },
    point: {
      size: 3,
      shape: "circle",
      style: {
        lineWidth: 0,
      },
    },
    label: {
      style: {
        fontSize: 12,
        fill: "rgba(255, 255, 255, 0.4)",
      }
    },
    tooltip: false
  };
  const {data = dataDefault, config = configDefault} = props

  const config_ = cloneDeep(config)
  const result = maxBy(data, 'value')
  const minItem = minBy(data, 'value')
  if (result && result.value) {
    const maxValue = result.value
    const yAxisMaxValue = maxValue 
    // yAxisMaxValue = parseInt(`${maxValue * 3.7 / 3}`, 10)
    // const yAxisMaxValue = 1700
    config_.yAxis.max = yAxisMaxValue
    config_.yAxis.min = minItem.value
  }

  return <div className="hwl-container">
    <div className="today">
      <div className="today-item">
        <h3>话务量</h3>
        <p>{data[data.length - 1].value}</p>
      </div>
      <div className="today-item">
        <h3>接通量</h3>
        <p>{data[data.length - 2].value}</p>
      </div>
    </div>
    <div className="recently">
      <Area {...config_} data={data} />
    </div>
  </div>;
};

export default WithContainer(AreaCom);