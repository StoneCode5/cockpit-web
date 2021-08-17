import React, { useEffect } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import * as echarts from "echarts";
import Big from 'big.js'
const DemoRose: React.FC<any> = (props) => {
  const defaultData = [
    { value: 40, name: "直接业务" },
    { value: 38, name: "个人代理" },
    { value: 32, name: "专业代理" },
    { value: 30, name: "网上业务" },
    { value: 28, name: "兼业代理" },
    { value: 26, name: "经纪人一类" },
    { value: 22, name: "经纪人二类" },
  ];
  const defaultColorList = [
    ["#ffc53d", "#faad14"],
    ["#ff4d4f", "#f5222d"],
    ["#ffa940", "#fa8c16"],
    ["#ffec3d", "#fadb14"],
    ["#bae637", "#a0d911"],
    ["#73d13d", "#52c41a"],
    ["#40a9ff", "#1890ff"],
    ["#597ef7", "#2f54eb"],
    ["#f759ab", "#eb2f96"],
    ["#9254de", "#722ed1"],
  ];
  const {
    data = defaultData,
    colorList = defaultColorList,
    height = 200,
    width = 200,
    textStyle = {
      color: "rgba(255,255,255, 0.4)",
      fontsize: "20px",
    },
    labelStyle = {
      color: "#EFEFF1",
      fontsize: "18px",
    },
  } = props;
  const defaultOption = {
    // legend: {
    //   bottom: 0,
    //   padding: [20, 20, 25, 20],
    //   itemWidth: 14,
    //   textStyle: textStyle,
    //   itemGap: 20,
    //   formatter: function (name: any) {
    //     let target = 0;
    //     for (var i = 0, l = data.length; i < l; i++) {
    //       if (data[i].name === name) target = data[i].value;
    //     }
    //     return (
    //       name + "  " + String(target).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    //     );
    //   },
    // },

    // legend: {
    //   orient: "vertical",
    //   left: "left",
    //   top: "middle",
    //   textStyle: labelStyle,
    //   formatter: (name:any) => {
    //     console.log('pieData', data)
    //     let sum = 0
    //     for (let i = 0; i < data.length; i++) {
    //       const item = data[i];
    //       sum = Big(sum).plus(item.value).toNumber()
    //     }
    //     const currentItem = data.find((item:any) => item.name === name)
        
    //     if (currentItem) {
    //       const ratio = Big(currentItem.value).div(sum).times(100).toFixed(2)
    //       return `${name}  ${currentItem.value}(万)  ${ratio}%`
    //     }
        
    //   },
    // },
    // itemStyle: {
    //   borderRadius: 4,
    // },
    tooltip: false,
    series: [
      {
        type: "pie",
        // right: '-40%',
        radius: ["30%", "60%"],
        center: ["50%", "50%"],
        // labelLine: {
        //   show: false,
        // },
        label: {
          normal: {
            textStyle: labelStyle,
            formatter: "{b}\n{c}(万)  {d}%",
          },
        },
        // roseType: "area",
        // label: {
        //   normal: {
        //     textStyle: labelStyle,
        //     formatter: "{b}\n{c}（万）\n{d}%",
        //   },
        // },
        itemStyle: {
          borderRadius: 4,
          normal: {
            color: function (params: any) {
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: colorList[params.dataIndex][0],
                },
                {
                  offset: 1,
                  color: colorList[params.dataIndex][1],
                },
              ]);
            },
          },
        },
        data: data,
      },
    ],
  };
  let initChart = () => {
    let element = document.getElementById("main1");
    let myChart = echarts.init(element as HTMLDivElement);
    let option = defaultOption;
    myChart.setOption(option);
  };
  useEffect(() => {
    initChart();
  });
  return <div id={"main1"} style={{ height: height, width: width }} />;
};

export default WithContainer(DemoRose);
