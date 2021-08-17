import { getApi, CONFIG, titleTextStyleNormal, dotlayer } from "./common";
// import { getCsvNumber } from "../../utils/utils";
const { AUTO_UPDATE } = CONFIG;

const getCloumns = (type) => {
  const columns = [
    {
      title: '险种',
      dataIndex: 'className',
      width: 110,
      align: 'left'
    },
    {
      title: type === 1 ? '当日签单保费' : '昨日保费收入',
      dataIndex: 'dayCurrent',
      width: 120,
      align: 'right',
      render:(val) => val.toFixed(2)
    },
    {
      title: type === 1 ? '当月签单保费' : '当月保费收入',
      dataIndex: 'monthCurrent',
      width: 120,
      align: 'right',
      render:(val) => val.toFixed(2)
    },
    {
      title: '当月增速',
      dataIndex: 'monthRatio',
      align: 'right',
      render:(val) => <span style={{color: val >= 0 ? 'inhert' : '#FF6565' }} >{val}%</span> 
      ,
    },
    {
      title: type === 1 ? '当年签单保费' : '当年保费收入' ,
      dataIndex: 'yearCurrent',
      width: 120,
      align: 'right',
      render:(val) => val.toFixed(2)
    },
    {
      title: '当年增速',
      dataIndex: 'yearRatio',
      align: 'right',
      render:(val) => <span style={{color: val >= 0 ? 'inhert' : '#FF6565' }} >{val}%</span> 
      ,
    },
  ]
  return columns
}
//  /api/edhic/class/income   接口数据
var table_table_2_data = [
    {
      className: "交强险",
      dayCurrent: 202.12,
      dayPrevious: 205.52,
      dayRatio: "-1.65",
      monthCurrent: 3136.87,
      monthPrevious: 6601.48,
      monthRatio: "-52.48",
      yearCurrent: 46443.95,
      yearPrevious: 46443.95,
      yearRatio: "0.44",
    },
    {
      className: "企业财产保险",
      dayCurrent: 20.55,
      dayPrevious: 138.4,
      dayRatio: "-85.15",
      monthCurrent: 428.5,
      monthPrevious: 1603.36,
      monthRatio: "-73.28",
      yearCurrent: 6787.07,
      yearPrevious: 6787.07,
      yearRatio: "0.30",
    },
    {
      className: "保证保险",
      dayCurrent: 13.11,
      dayPrevious: 7.17,
      dayRatio: "82.84",
      monthCurrent: 252.58,
      monthPrevious: 432.03,
      monthRatio: "-41.54",
      yearCurrent: 1542.75,
      yearPrevious: 1542.75,
      yearRatio: "0.85",
    },
    {
      className: "家庭财产保险",
      dayCurrent: 0.11,
      dayPrevious: 1.13,
      dayRatio: "-90.07",
      monthCurrent: 2.83,
      monthPrevious: 36.66,
      monthRatio: "-92.27",
      yearCurrent: 50.78,
      yearPrevious: 50.78,
      yearRatio: "0.22",
    },
    {
      className: "工程保险",
      dayCurrent: 9.17,
      dayPrevious: 91.37,
      dayRatio: "-89.96",
      monthCurrent: 239.73,
      monthPrevious: 385.38,
      monthRatio: "-37.79",
      yearCurrent: 5259.75,
      yearPrevious: 5259.75,
      yearRatio: "0.17",
    },
    {
      className: "意外险",
      dayCurrent: 72.03,
      dayPrevious: 65.79,
      dayRatio: "9.49",
      monthCurrent: 920.36,
      monthPrevious: 2691.52,
      monthRatio: "-65.81",
      yearCurrent: 24322.42,
      yearPrevious: 24322.42,
      yearRatio: "0.30",
    },
    {
      className: "机动车辆保险",
      dayCurrent: 314.57,
      dayPrevious: 383.73,
      dayRatio: "-18.02",
      monthCurrent: 5719.89,
      monthPrevious: 11072.93,
      monthRatio: "-48.34",
      yearCurrent: 80430.25,
      yearPrevious: 80430.25,
      yearRatio: "0.39",
    },
    {
      className: "特殊风险保险",
      dayCurrent: 0,
      dayPrevious: 68.5,
      dayRatio: "-100.00",
      monthCurrent: 261.8,
      monthPrevious: 333.16,
      monthRatio: "-21.42",
      yearCurrent: 3747.4,
      yearPrevious: 3747.4,
      yearRatio: "0.00",
    },
    {
      className: "短期健康保险",
      dayCurrent: 56.22,
      dayPrevious: 3.19,
      dayRatio: "1663.53",
      monthCurrent: 282.7,
      monthPrevious: 1667.25,
      monthRatio: "-83.04",
      yearCurrent: 10371.98,
      yearPrevious: 10371.98,
      yearRatio: "0.54",
    },
    {
      className: "船舶保险",
      dayCurrent: 0,
      dayPrevious: 0,
      dayRatio: "0.00",
      monthCurrent: 23.87,
      monthPrevious: 41.32,
      monthRatio: "-42.22",
      yearCurrent: 121.94,
      yearPrevious: 121.94,
      yearRatio: "0.00",
    },
    {
      className: "责任保险",
      dayCurrent: 465.75,
      dayPrevious: 37,
      dayRatio: "1158.89",
      monthCurrent: 989.84,
      monthPrevious: 1935.54,
      monthRatio: "-48.86",
      yearCurrent: 10566.56,
      yearPrevious: 10566.56,
      yearRatio: "4.41",
    },
    {
      className: "货物运输保险",
      dayCurrent: 0.23,
      dayPrevious: 0.14,
      dayRatio: "59.26",
      monthCurrent: 9.46,
      monthPrevious: 13.19,
      monthRatio: "-28.30",
      yearCurrent: 117.9,
      yearPrevious: 117.9,
      yearRatio: "0.20",
    },
]
var table_table_1_data = table_table_2_data

const tableConfig = {
  layers: {
      table_table_1: {
        id: "table_table_1",
        attr: {
          x: 1288,
          y: 320,
          w: 610,
          h: 308,
        },
        config: {
            columns: getCloumns(1),
        },
        data: {
          source: table_table_1_data,
          // api: getApi("/api/edhic/class/sign"),
          autoUpdate: AUTO_UPDATE,
        },
        requirePath: "Table",
      },
      table_table_2: {
        id: "table_table_2",
        attr: {
          x: 1288,
          y: 710,
          w: 610,
          h: 308, 
        },
        config: {
            columns: getCloumns(2),
        }, 
        data: {
          source: table_table_2_data,
          // api: getApi("/api/edhic/class/income"),
          autoUpdate: AUTO_UPDATE,
        },
        requirePath: "Table",
      },
      table_title_1: {
        id: "table_title_1",
        attr: {
          x: 1324,
          y: 680,
          w: 190,
          h: 22,
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
          source: "分险类保费收入及增速(万)",
          api: {},
          dcConfig: {},
        },
      },
      table_title_2: {
        id: "table_title_2",
        attr: {
          x: 1324,
          y: 290,
          w: 190,
          h: 22,
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
          source: "分险类签单保费及增速(万)",
          api: {},
          dcConfig: {},
        },
      },
      table_img_1: {
        id: "table_img_1",
        type: "com",
        attr: {
          x: 1286,
          y: 274,
          w: 614,
          h: 786,
          opacity: 1,
        },
        requirePath: "CustomBackground",
        config: {
          typeNo: 17,
        },
        data: {},
      },
      table_img_2: {
        ...dotlayer,
        id: "table_img_2",
        attr: {
          x: 1302,
          y: 684,
          w: 14,
          h: 14,
          opacity: 1,
        },
      },
      table_img_3: {
        ...dotlayer,
        id: "table_img_3",
        attr: {
          x: 1302,
          y: 294,
          w: 14,
          h: 14,
          opacity: 1,
        },
      },
  },
  zIndexList: [
    { id: "table_img_1" },
    { id: "table_table_1" },
    { id: "table_table_2" },
    { id: "table_title_1" },
    { id: "table_title_2" },
    { id: "table_img_2" },
    { id: "table_img_3" },
  ],
};

export default tableConfig;
