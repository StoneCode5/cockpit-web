import bgConfig from "./bgConfig";
import { getCsvNumber } from "../../utils/utils";
import {
  CONFIG,
  getApi,
  titleTextStyleNormal,
  titleTextStyleXLarge,
  dotlayer,
} from "./common";
import pieConfig from "./pieConfig";
// import mapConfig from "./mapConfig";
import V5mapConfig from './v5/mapConfig'
import V5titleConfig from './v5/titleConfig'
import V5moneyAndCicleConfig from './v5/moneyAndCicleConfig'
import V5leftBottom from './v5/leftBottom'
import V5ndbfConfig from './v5/nianduBaofei'
import tableConfig from "./tableConfig";
import { handleIntervalAndLineData } from "./utils";
import Big from "big.js";
const { AUTO_UPDATE } = CONFIG;

const handleChannel = (data: any) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    switch (item.name) {
      case "直接业务":
        result[0] = item;
        break;
      case "兼业代理":
        result[1] = item;
        break;
      case "经纪人一类":
        result[2] = item;
        break;
      case "专业代理":
        result[5] = item;
        break;
      case "经纪人二类":
        result[4] = item;
        break;
      case "个人代理":
        result[3] = item;
        break;

      default:
        result.push(item);
        break;
    }
  }
  return result;
};

// point要写在最后，不然会被X轴覆盖
const lineConfig = {
  xField: "label",
  yField: "value",
  smooth: true,
  limitInPlot: false, // 是否对超出坐标系范围的 Geometry 进行剪切
  // appendPadding: 16,
  color: "#5D80FF",
  xAxis: {
    line: null,
    grid: {
      line: {
        style: {
          stroke: "#fff",
          lineWidth: 1,
          lineDash: [2, 3],
          strokeOpacity: 0.2,
          shadowBlur: 0,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer",
        },
      },
    },
    label: {
      // spacing: 20,
      style: {
        fill: "#fff",
        opacity: 0.3,
        fontSize: 12,
      },
      position: "top",

    },
    tickLine: null,
    subTickLine: null,
  },
  yAxis: {
    line: null,
    // max: 20,
    tickCount: 5,
    grid: {
      line: {
        style: {
          stroke: "#fff",
          lineWidth: 1,
          lineDash: [2, 3],
          strokeOpacity: 0.2,
          shadowBlur: 0,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer",
        },
      },
    },
    tickLine: null,
    subTickLine: null,
    label: null,
  },
  label: {
    style: {
      fontSize: 12,
      // fill: "#41B5F2", // 青蓝色
      fill: "#F6AA14", // 橘黄色
      
    },
    formatter: (_: any, item: any): string => {
      return getCsvNumber(item._origin.value, true);
    },
  },
  point: {
    size: 5,
    shape: "circle",
    style: {
      fill: "#F6AA14", 
      stroke: "#021237",
      lineWidth: 2,
    },
  },
  tooltip: false,
};

//  /api/edhic/nearest/policy   接口数据
var line_1_data = [
  {
    label: 10,
    value: 4500,
  },
  {
    label: 11,
    value: 6500,
  },
  {
    label: 12,
    value: 8500,
  },
  {
    label: 13,
    value: 6000,
  },
  {
    label: 14,
    value: 8800,
  },
  {
    label: 15,
    value: 7500,
  },
  {
    label: 16,
    value: 5500,
  },
]

//  /api/edhic/today/policy   接口数据
var rounds_3_data = [
  {
    label: "合计", 
    value: 8000,
  },
  {
    label: "车险",
    value: 5000,
  },
  {
    label: "非车险",
    value: 3000,
  },
]
//  /api/edhic/nearest/customer   接口数据
var line_2_data = [
  {
    label: 10,
    value: 4500,
  },
  {
    label: 11,
    value: 6500,
  },
  {
    label: 12,
    value: 8500,
  },
  {
    label: 13,
    value: 6000,
  },
  {
    label: 14,
    value: 8800,
  },
  {
    label: 15,
    value: 7500,
  },
  {
    label: 16,
    value: 5500,
  },
]
//  /api/edhic/today/company   接口数据
var column_data = [
  { label: "深圳", value: 9500 },
  { label: "广东", value: 10000 },
  { label: "广西", value: 6500 },
  { label: "云南", value: 6500 },
  { label: "湖北", value: 7500 },
  { label: "河南", value: 8500 },
  { label: "江西", value: 6500 },
  { label: "陕西", value: 5500 },
  { label: "贵州", value: 4500 },
  { label: "海南", value: 3500 },
  { label: "四川", value: 8500 },
  { label: "上海", value: 9500 },
  { label: "山东", value: 8500 },
  { label: "河北", value: 7500 },
  { label: "安徽", value: 6500 },
]
//  /api/edhic/nearest/product   接口数据
var line_3_data = [
  {
    label: 10,
    value: 4500,
  },
  {
    label: 11,
    value: 6500,
  },
  {
    label: 12,
    value: 8500,
  },
  {
    label: 13,
    value: 6000,
  },
  {
    label: 14,
    value: 8800,
  },
  {
    label: 15,
    value: 7500,
  },
  {
    label: 16,
    value: 5500,
  },
]
//  /api/edhic/today/market   接口数据
var data = [
  { label: "上海分公司", current: 7937.51, target: 12000 },
  { label: "云南分公司", current: 20114.98, target: 23000 },
  { label: "四川分公司", current: 9377.13, target: 16000 },
  { label: "安徽分公司", current: 6705.54, target: 12500 },
  { label: "山东分公司", current: 7396.52, target: 15000 },
  { label: "广东分公司", current: 48641.71, target: 75000 },
  { label: "广西分公司", current: 11590.93, target: 19100 },
  { label: "江西分公司", current: 6576.14, target: 13500 },
  { label: "河北分公司", current: 7742.25, target: 12000 },
  { label: "河南分公司", current: 11332, target: 20000 },
  { label: "海南分公司", current: 4253.96, target: 6500 },
  { label: "深圳分公司", current: 8757.61, target: 12800 },
  { label: "湖北分公司", current: 11625.49, target: 17000 },
  { label: "贵州分公司", current: 16975.05, target: 24500 },
  { label: "陕西分公司", current: 7036.96, target: 12000 },
]
var intervalAndLine_1_data =handleIntervalAndLineData(data);

//  /api/edhic/today/product   接口数据
var rounds_1_data = [
  {
    label: 10,
    value: 4500,
  },
  {
    label: 11,
    value: 6500,
  },
  {
    label: 12,
    value: 8500,
  },
]
//  /api/edhic/nearest/traffic   接口数据
var area_hwl_data = [
  {
    date: "01",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "02",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "03",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "04",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "05",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "06",
    type: "7日接通量",
    value: 8976,
  },
  {
    date: "07",
    type: "7日接通量",
    value: 8976,
  },
]


export const homeConfig = {
  scenes: [
    {
      name: "场景17",
      layers: {
        ...bgConfig.layers,
        ...pieConfig.layers,
        // ...mapConfig.layers,
        ...tableConfig.layers,
        ...V5ndbfConfig.layers,
        title_todyInsurance: {
          id: "title_todyInsurance",
          attr: {
            x: 52,
            y: 145,
            w: 153,
            h: 29,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "今日签单保费(万)",
            api: {},
            dcConfig: {},
          },
        },
        // 今日签单保费
        rounds_1: {
          id: "rounds_1",

          attr: {
            x: 50,
            y: 192,
            w: 420,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: [
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#FEA406",
                textSize: 14,
                roundType: "double", // single || double
                loopWidth: 6,
                outerColor: ["#75F2FF", "#3BD3FF"],
                insideColor: ["#FF6E76", "#FF808A"],
              },
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#F25C5D",
                textSize: 14,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#FF6E76", "#FF808A"],
              },
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#3DD4FF",
                textSize: 14,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#75F2FF", "#3BD3FF"],
              },
            ],
          },
          data: {
            source: rounds_1_data,
//            api: getApi("/api/edhic/today/product"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Round",
        },
        // 今日关键指标++
        rounds_3: {
          id: "rounds_3",
          attr: {
            x: 50,
            y: 832,
            w: 420,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: [
              {
                width: 55,
                labelColor: "#3DD4FF",
                labelSize: 14,
                labelMargin: "0px 12px",
                textColor: "#3DD4FF",
                textSize: 18,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#75F2FF", "#3BD3FF"],
              },
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 12px",
                textColor: "#32DB6C",
                textSize: 18,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#28C957", "#40F78D"],
              },
              {
                width: 55,
                labelColor: "#F9E73A",
                labelSize: 14,
                labelMargin: "0px 12px",
                textColor: "#F9E73A",
                textSize: 18,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#FFE651", "#F4E924"],
              },
            ],
          },
          data: {
            source: rounds_3_data,
//            api: getApi("/api/edhic/today/policy"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Round",
        },
        title_todayCustom: {
          id: "title_todayCustom",

          attr: {
            x: 52,
            y: 465,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "今日客户数",
            api: {},
            dcConfig: {},
          },
        },
        title_7customTrend: {
          id: "title_7insuranceTrend",

          attr: {
            x: 52,
            y: 588,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "近七日客户数",
            api: {},
            dcConfig: {},
          },
        },
        title_8: {
          id: "title_8",

          attr: {
            x: 52,
            y: 785,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "今日关键指标",
            api: {},
            dcConfig: {},
          },
        },

        title_9: {
          id: "title_9",

          attr: {
            x: 52,
            y: 904,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "近七日保单量",
            api: {},
            dcConfig: {},
          },
        },
        // 今日客户数++
        rounds_2: {
          id: "rounds_2",

          attr: {
            x: 50,
            y: 512,
            w: 420,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: [
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#FEA406",
                textSize: 18,
                roundType: "double", // single || double
                loopWidth: 6,
                outerColor: ["#43E2FF", "#44A5FF"],
                insideColor: ["#FF9E0D", "#FFCD1E"],
              },
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#FF9E0D",
                textSize: 18,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#43E2FF", "#44A5FF"],
              },
              {
                width: 55,
                labelColor: "#EFEFF1",
                labelSize: 14,
                labelMargin: "0px 15px",
                textColor: "#3DD4FF",
                textSize: 18,
                roundType: "single", // single || double
                loopWidth: 6,
                outerColor: ["#75F2FF", "#3BD3FF"],
              },
            ],
          },
          data: {
            source: [
              { label: "合计", value: 2980 },
              { label: "个人", value: 2980 },
              { label: "团体", value: 2980 },
            ],
//            api: getApi("/api/edhic/today/customer"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Round",
        },
        title_7feeTrend: {
          id: "title_7feeTrend",

          attr: {
            x: 58,
            y: 290,
            w: 180,
            h: 29,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "近七日签单保费(万)",
            api: {},
            dcConfig: {},
          },
        },
        title_todyCommunicateNumber: {
          id: "title_todyCommunicateNumber",

          attr: {
            x: 1440,
            y: 440,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "机构年度保费(万)",
            api: {},
            dcConfig: {},
          },
        },
        title_todyTypeOfAFee: {
          id: "title_todyTypeOfAFee",
          attr: {
            x: 692,
            y: 830,
            w: 240,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "A类业务保费年度达成(万)",
            api: {},
            dcConfig: {},
          },
        },
        title_realTimeScreen: {
          id: "title_realTimeScreen",

          attr: {
            x: 52,
            y: 32,
            w: 272,
            h: 32,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleXLarge,
            textAlign: "center",
          },
          data: {
            source: "运营态势感知系统",
            api: {},
            dcConfig: {},
          },
        },
        title_todyFeeOfChannels: {
          id: "title_todyFeeOfChannels",

          attr: {
            x: 1410,
            y: 110,
            w: 152,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "right",
          },
          data: {
            source: "今日渠道保费(万)",
            api: {},
            dcConfig: {},
          },
        },
        timer_WzpiH: {
          id: "timer_WzpiH",

          attr: {
            w: 172,
            h: 16,
            x: 358,
            y: 40,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            textStyle: {
              fontSize: 16,
              color: "#EFEFF1",
              fontWeight: "normal",
            },
            format: "YYYY-MM-DD HH:mm:ss",
            duration: 1000,
          },
          data: {
            source: "",
            api: {},
            dcConfig: {},
          },

          requirePath: "Timer",
        },
        // 近七日保单量++
        line_1: {
          id: "line_1",

          attr: {
            x: 55,
            y: 948,
            w: 400,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: {
              ...lineConfig,
              meta: {
                label: { alias: "日期" },
                value: { alias: "保单量" },
              },
            },
          },
          data: {
            source: line_1_data,
//            api: getApi("/api/edhic/nearest/policy"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Line",
        },
        // 近七日客户数++
        line_2: {
          id: "line_2",

          attr: {
            x: 55,
            y: 628,
            w: 400,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: {
              ...lineConfig,
              meta: {
                label: { alias: "日期" },
                value: { alias: "客户数" },
              },
            },
          },
          data: {
            source: line_2_data,
//            api: getApi("/api/edhic/nearest/customer"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Line",
        },

        intervalAndLine_1: {
          id: "intervalAndLine_1",
          attr: {
            x: 770,
            y: 830,
            w: 490,
            h: 225,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: {
              xField: "label",
              yField: ["value", "percent"],
              yAxis: {
                value: {
                  grid:null,
                  // label: {
                  //   style: {
                  //     fill: "#fff",
                  //     opacity: 0.3,
                  //     fontSize: 12,
                  //   },
                  // },
                  label:false,
                  // tickCount: 5,
                },
                percent: {
                  grid: {
                    line: {
                      style: {
                        stroke: "#fff",
                        lineWidth: 1,
                        lineDash: [2, 3],
                        strokeOpacity: 0.2,
                        shadowBlur: 0,
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                        cursor: "pointer",
                      },
                    },
                  },
                  label: {
                    style: {
                      fill: "#fff",
                      opacity: 0.3,
                      fontSize: 12,
                    },
                    formatter: (val: number) =>`${Big(val).times(100).toNumber()}%`
                  },
                  // tickCount: 5,
                },
              },
              xAxis: {
                tickLine: null,
                subTickLine: null,
                label: {
                  style: {
                    fill: "#fff",
                    opacity: 0.3,
                    fontSize: 12,
                  },
                },
              },
              tooltip: {
                customContent: () => null,
              },
              // interactions: [{ type: "tooltip", enable: false }],
              legend: {
                position: "top-right",
                itemName: {
                  formatter: (text: string) => {
                    return text === "percent" ? "达成率" : text;
                  },
                },
              },
              geometryOptions: [
                {
                  geometry: "column",
                  label: {
                    position: "top",
                    style: { 
                      fill: "#8EC8FF",
                      fontSize: 10,
                    },
                    formatter: (item: any) => {
                      return item.type === "目标" ? item.realValue : "";
                    },
                  },
                  isStack: true,
                  seriesField: 'type',
                  columnWidthRatio: 0.4,
                  color: ['l(90) 0:rgba(93,128,255,0.80) 1:rgba(93,128,255,0.20)', 'l(90) 0:#F99A13 1:rgba(255,126,17,0.20)']
                },
                {
                  geometry: "line",
                  lineStyle: { lineWidth: 2 },
                  label: {
                    position: "top",
                    // style: { fill: "#98efe7", fontSize: 10 },
                    style: { fill: "#F6AA14", fontSize: 10 },
                    formatter: (item: any) => {
                      return `${Big(item.percent).times(100).toFixed(1)}%`;
                    },
                  },
                  smooth: true,
                  // color: "#FF9E0D",
                  color: "#5D80FF",
                  point: {
                    shape: "circle",
                    size: 2,
                    style: { 
                      stroke: "#F6AA14",
                      fill: "#F6AA14",
                    },
                  },
                  tooltip: {
                    fields: [],
                    formatter: () => {
                      return "1";
                    },
                  },
                },
              ],
              animation: true,
              // xAxis: {
              //   tickLine: null,
              //   subTickLine: null,
              //   label: {
              //     style: {
              //       fill: "#fff",
              //       opacity: 0.3,
              //       fontSize: 12,
              //     },
              //   },
              // },
              // tooltip: {
              //   customContent: () => null,
              // },
              // interactions: [{ type: "tooltip", enable: false }],
              // legend: {
              //   position: "top-right",
              //   itemName: {
              //     formatter: (text: string) =>
              //       text === "intervalField" ? "目标" : "达成率",
              //   },
              // },
              // geometryOptions: [
              //   {
              //     geometry: "column",
              //     label: {
              //       position: "top",
              //       style: { fill: "#578AF0", fontSize: 10 },
              //     },
              //     color: "l(90) 0:#43E2FF 1:#44A5FF",
              //     tooltip: {
              //       fields: [],
              //       formatter: () => {
              //         return "1";
              //       },
              //     },
              //     isGroup: true,
              //     isStack: true,
              //     seriesField: "type",
              //     groupField: "label",
              //   },
              // ],
            },
          },
          data: {
            source: intervalAndLine_1_data,
            
//            api: getApi("/api/edhic/today/market", handleIntervalAndLineData),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "IntervalAndLine",
        },
        // 今日各渠道保费++
        rose: {
          id: "rose",
          attr: {
            x: 1420,
            y: 106,
            w: 480,
            h: 304,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            colorList: [
              ["#588BFF", "#4077DF"], //蓝色
              ["#40F78D ", "#28C957"], // 绿色
              ["#FFE651", "#F4E924"], // 黄色
              ["#78EDFF", "#3ED9FF"],
              ["#FF808A", "#FF6E76"],
              ["#8FFFC7", "#73FFAC"], // 青色
              ["#FFA040", "#F5813F"],
              ["#BC65FF", "#8D48E3"],
            ],
            labelStyle: {
              color: "#EFEFF1",
              fontsize: "24px",
            },
            textStyle: {
              color: "rgba(255,255,255, 0.4)",
              fontsize: "24px",
            },
            width: 480,
            height: 304,
          },
          data: {
            source: [
              { value: 81.55, name: "直接业务" },
              { value: 36.92, name: "个人代理" },
              { value: 66.56, name: "专业代理" },
              { value: 99.65, name: "网上业务" },
              { value: 73.61, name: "兼业代理" },
              { value: 95.5, name: "经纪人一类" },
              { value: 68.51, name: "经纪人二类" },
            ],
//            api: getApi("/api/edhic/today/channel", handleChannel),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Rose",
        },
        // 近七日保费++
        line_3: {
          id: "line_3",
          // 传给外层高阶组件的布局配置
          attr: {
            x: 64,
            y: 323,
            w: 518,
            h: 80,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          //传给组件的模块具体配置
          config: {
            config: {
              ...lineConfig,
              meta: {
                label: { alias: "日期" },
                value: { alias: "保费" },
              },
            },
          },
          //组件自身数据获取相关的参数
          data: {
            source: line_3_data,
//            api: getApi("/api/edhic/nearest/product"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },

          requirePath: "Line",
        },
        // 机构年度保费++
        column: {
          id: "column",
          attr: {
            x: 1435,
            y: 470,
            w: 440,
            h: 380,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },
          config: {
            config: {},
          },
          data: {
            source: column_data,
//            api: getApi("/api/edhic/today/company"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },
          requirePath: "Column2",
        },
        title_hwl: {
          id: "title_hwl",

          attr: {
            x: 1440,
            y: 920,
            w: 180,
            h: 20,
            deg: 0,
            opacity: 1,
            sizeLock: false,
            flipH: false,
            flipV: false,
          },

          requirePath: "Title",
          config: {
            textStyle: titleTextStyleNormal,
            textAlign: "left",
          },
          data: {
            source: "今日话务量",
            api: {},
            dcConfig: {},
          },
        },
        // 今日话务量 ++
        area_hwl: {
          id: "area_hwl",
          attr: {
            x: 1425,
            y: 910,
            w: 450,
            h: 130,
          },
          config: {},
          data: {
            source: area_hwl_data,
//            api: getApi("/api/edhic/nearest/traffic"),
            autoUpdate: AUTO_UPDATE,
            dcConfig: {},
          },
          requirePath: "Area",
        },
        ...V5mapConfig.layers,
        ...V5titleConfig.layers,
        ...V5moneyAndCicleConfig.layers,
        ...V5leftBottom.layers,
      },
    },
  ],
  config: {
    width: 1920,
    height: 1080,
    display: 2,
    backgroundColor: "#021237",
    // backgroundColor: "#fff",
    backgroundImage: "",
    // 测试自适应使用图片
    // backgroundImage:
    //   "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/51182f91cfa0fd0b3c8754d7ca23e877.png",
    // title 组件顺序，从左至右 从上至下
    zIndexList: [
      ...bgConfig.zIndexList,
      ...pieConfig.zIndexList,
      // ...mapConfig.zIndexList,
      // { id: "timer_WzpiH" },
      // { id: "line_1" },
      // { id: "line_2" },
      { id: "line_3" },
      // { id: "title_todyInsurance" },
      // { id: "rounds_1" },
      // { id: "title_7insuranceTrend" },
      // { id: "rounds_2" },
      // { id: "rounds_3" },
      // { id: "title_todayCustom" },
      // { id: "title_7customTrend" },
      // { id: "title_8" },
      // { id: "title_9" },
      // { id: "title_todyCommunicateNumber" },
      // { id: "title_realTimeScreen" },
      { id: "title_todyTypeOfAFee" },
      // { id: "title_todyFeeOfChannels" },
      // { id: "title_todyFeeOfProduct" },
      { id: "title_7feeTrend" },
      // { id: "title_todaySignMoney" },
      // { id: "rose" },
      { id: "intervalAndLine_1" },
      // { id: "column" },
      // { id: "title_hwl" },
      // { id: "area_hwl" },
      ...tableConfig.zIndexList,
      ...V5mapConfig.zIndexList,
      ...V5titleConfig.zIndexList,
      ...V5moneyAndCicleConfig.zIndexList,
      ...V5leftBottom.zIndexList,
      ...V5ndbfConfig.zIndexList,
    ],
    cacheRepeatRequest: true,
  },
  name: "测试",
};
