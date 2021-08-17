import { getApi, CONFIG, titleTextCommon } from "./common";
// import { getCsvNumber } from "../../utils/utils";
const { AUTO_UPDATE } = CONFIG;

interface Item {
  label: "年度" | "月度" | "今日";
  value: number;
}

const MAP = {
  w:920,
  h: 610,
  x: 506,
  y: 178
}

const textTitle = {
  ...titleTextCommon,
  fontSize: 24,
};

const textSubtitle = {
  ...titleTextCommon,
  fontSize: 18,
};
const feeHandle = (id: string, data: Item[]) => {
  const findItem = data.find((item) => item.label === id);
  if (findItem) {
    return findItem.value;
  }
  return -1;
};

const numberConfig = {
  textStyle: {
    fontFamily: "DINAlternate-Bold",
    fontSize: "28px",
    color: "#F6AA14",
    letterSpacing: 0,
    lineHeight: "28px",
  },
  textAlign: "left",
  isThousands: true,
  surfix: null,
};

//  /api/edhic/total/area   数据
var number_year_data = {
  lable: "年度",
  value: 948735,
}
var number_month_data = {
    lable: "月度",
    value: 89356,
}
var number_day_data = {
  lable: "当日",
  value:  2364,
}

//  /api/edhic/today/area   数据
var map_1_data = [
  {
    name: "广东分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "云南分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "海南分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "四川分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "江西分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "湖北分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "山东分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "安徽分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "广西分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "贵州分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "上海分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "河南分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "陕西分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
  {
    name: "河北分公司",
    customerNum: 95274,
    instranceNum: 67239,
    reportNum: 28796,
    signMoney: 902715,
    accreditationNum: 853964,
  },
]





const config = {
  layers: {
    map_1: {
      id: "map_1",

      attr: {
        x: MAP.x,
        y: MAP.y,
        w: MAP.w,
        h: MAP.h,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      config: {
        config: {
          width: MAP.w,
          height: MAP.h,
        },
      },
      data: {
        source: map_1_data,
//        api: getApi("/api/edhic/today/area"),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
      requirePath: "Map",
    },

    map_cover_1: {
      id: "map_cover_1",
      attr: {
        x: MAP.x,
        y: MAP.y,
        w: MAP.w,
        h: MAP.h,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      config: {
        background: {
          backgroundColor: "transparent",
        },
        custom: true,
      },
      data: {
        source: [],
        dcConfig: {},
      },

      requirePath: "CustomBackground",
    },

    title_todyFee: {
      id: "title_todyFee",
      attr: {
        x: 892,
        y: 93,
        w: 190,
        h: 24,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },

      requirePath: "Title",
      config: {
        textStyle: textTitle,
        textAlign: "left",
      },
      data: {
        source: "签单保费（万）",
        api: {},
        dcConfig: {},
      },
    },
    title_year: {
      id: "title_year",
      attr: {
        x: 577,
        y: 181,
        w: 190,
        h: 26,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },

      requirePath: "Title",
      config: {
        textStyle: textSubtitle,
        textAlign: "left",
      },
      data: {
        source: "年度:",
        api: {},
        dcConfig: {},
      },
    },
    number_year: {
      id: "number_year",
      attr: {
        x: 643,
        y: 175,
        w: 210,
        h: 28,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "NumberAndTitle",
      config: numberConfig,
      data: {
        source: number_year_data,
//        api: getApi("/api/edhic/total/area", feeHandle.bind(null, "年度")),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
    },
    title_month: {
      id: "title_month",
      attr: {
        x: 865,
        y: 181,
        w: 190,
        h: 26,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },

      requirePath: "Title",
      config: {
        textStyle: textSubtitle,
        textAlign: "left",
      },
      data: {
        source: "月度:",
        api: {},
        dcConfig: {},
      },
    },
    number_month: {
      id: "number_month",
      attr: {
        x: 929,
        y: 175,
        w: 210,
        h: 28,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "NumberAndTitle",
      config: numberConfig,
      data: {
        source: number_month_data,
//        api: getApi("/api/edhic/total/area", feeHandle.bind(null, "月度")),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
    },
    title_day: {
      id: "title_day",
      attr: {
        x: 1129,
        y: 181,
        w: 190,
        h: 26,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "Title",
      config: {
        textStyle: textSubtitle,
        textAlign: "left",
      },
      data: {
        source: "今日:",
        api: {},
        dcConfig: {},
      },
    },
    number_day: {
      id: "number_day",
      attr: {
        x: 1193,
        y: 175,
        w: 210,
        h: 28,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      requirePath: "NumberAndTitle",
      config: numberConfig,
      data: {
        source: number_day_data,
//        api: getApi("/api/edhic/total/area", feeHandle.bind(null, "今日")),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
    },
  },
  zIndexList: [
    { id: "map_1" },
    { id: "map_cover_1" },
    { id: "title_todyFee" },
    { id: "title_year" },
    { id: "number_year" },
    { id: "title_month" },
    { id: "number_month" },
    { id: "title_day" },
    { id: "number_day" },
  ],
};
export default config;
