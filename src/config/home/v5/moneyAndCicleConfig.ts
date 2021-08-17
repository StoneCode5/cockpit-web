import { CONFIG, getApi } from "../common";
const { AUTO_UPDATE } = CONFIG;

const handleData = (key:any, data:any) => {
  if (Array.isArray(data) && typeof data[0][key] !== "undefined" && typeof data[1][key] !== "undefined") {
        const result = [data[0][key], data[1][key]]
        return result
    }
    return [0, 0]
}
//  /api/edhic/type/income   接口数据
var moneyAndCicle2 = [
  {
    premiumType: "A类",
    dayCurrent: 639.16,
    monthCurrent: 11677.76,
    yearCurrent: 162821.63,
  },
  {
    premiumType: "B类",
    dayCurrent: 33.39,
    monthCurrent: 1242.59,
    yearCurrent: 28074.37,
  },
  {
    premiumType: "统保",
    dayCurrent: 0,
    monthCurrent: 2287.43,
    yearCurrent: 201414.82,
  },
]
var moneyAndCicle_2_data = handleData('dayCurrent', moneyAndCicle2)
var moneyAndCicle_4_data = handleData('monthCurrent', moneyAndCicle2)
var moneyAndCicle_6_data = handleData('yearCurrent', moneyAndCicle2)


//  /api/edhic/nearest/policy   接口数据
var moneyAndCicle1= [
  {
    premiumType: "A类",
    dayCurrent: 912.41,
    monthCurrent: 18377.02,
    yearCurrent: 1216239247.91,
  },
  {
    premiumType: "B类",
    dayCurrent: 12.35,
    monthCurrent: 1201.56,
    yearCurrent: 28054.37,
  },
]
var moneyAndCicle_1_data = handleData('dayCurrent', moneyAndCicle1)
var moneyAndCicle_3_data = handleData('monthCurrent', moneyAndCicle1)
var moneyAndCicle_5_data = handleData('yearCurrent', moneyAndCicle1)




const config = {
  layers: {
    moneyAndCicle_1:{
      id: "moneyAndCicle_1",
      attr: {
        x: 36,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "当日签单(元)",
        },
      },
      data: {
        source: moneyAndCicle_1_data,
//        api: getApi("/api/edhic/type/sign", handleData.bind(null, 'dayCurrent')),
        autoUpdate: AUTO_UPDATE,
      },
    },
    moneyAndCicle_2: {
      id: "moneyAndCicle_2",
      attr: {
        x: 327,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "昨日保费(元)",
        },
      },
      data: {
        source: moneyAndCicle_2_data,
//        api: getApi("/api/edhic/type/income", handleData.bind(null, 'dayCurrent')),
      },
    },
    moneyAndCicle_3: {
      id: "moneyAndCicle_3",
      attr: {
        x: 669,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "当月签单(元)",
        },
      },
      data: {
        source: moneyAndCicle_3_data,
//        api: getApi("/api/edhic/type/sign", handleData.bind(null, 'monthCurrent')),
        autoUpdate: AUTO_UPDATE,
      },
    },
    moneyAndCicle_4: {
      id: "moneyAndCicle_4",
      attr: {
        x: 960,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "当月保费(元)",
        },
      },
      data: {
        source: moneyAndCicle_4_data,
//        api: getApi("/api/edhic/type/income", handleData.bind(null, 'monthCurrent')),
      },
    },
    moneyAndCicle_5: {
      id: "moneyAndCicle_5",
      attr: {
        x: 1302,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "当年签单(元)",
        },
      },
      data: {
        source: moneyAndCicle_5_data,
//        api: getApi("/api/edhic/type/sign", handleData.bind(null, 'yearCurrent')),
        autoUpdate: AUTO_UPDATE,
      },
    },
    moneyAndCicle_6: {
      id: "moneyAndCicle_6",
      attr: {
        x: 1593,
        y: 104,
        w: 300,
        h: 124,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "MoneyAndCicle",
      config: {
        config: {
          mainTitle: "当年保费(元)",
        },
      },
      data: {
        source: moneyAndCicle_6_data,
//        api: getApi("/api/edhic/type/income", handleData.bind(null, 'yearCurrent')),
      },
    },
    moneyAndCicle_bg_1: {
      id: "moneyAndCicle_bg_1",
      attr: {
        x: 20,
        y: 100,
        w: 614,
        h: 158,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 18,
      },
      data: {},
      version: "0.0.12",
    },
    moneyAndCicle_bg_2: {
      id: "moneyAndCicle_bg_2",
      attr: {
        x: 653,
        y: 100,
        w: 614,
        h: 158,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 18,
      },
      data: {},
      version: "0.0.12",
    },
    moneyAndCicle_bg_3: {
      id: "moneyAndCicle_bg_3",
      attr: {
        x: 1286,
        y: 100,
        w: 614,
        h: 158,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 18,
      },
      data: {},
      version: "0.0.12",
    },
  },
  zIndexList: [
    { id: "moneyAndCicle_bg_1" },
    { id: "moneyAndCicle_bg_2" },
    { id: "moneyAndCicle_bg_3" },
    { id: "moneyAndCicle_1" },
    { id: "moneyAndCicle_2" },
    { id: "moneyAndCicle_3" },
    { id: "moneyAndCicle_4" },
    { id: "moneyAndCicle_5" },
    { id: "moneyAndCicle_6" },
  ],
};
export default config;
