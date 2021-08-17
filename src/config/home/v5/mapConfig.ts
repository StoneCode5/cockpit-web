import { getApi, CONFIG, titleTextStyleNormal, dotlayer, shadowLayer } from "../common";
// import { getCsvNumber } from "../../utils/utils";
const { AUTO_UPDATE } = CONFIG;

const MAP = {
  w: 800,
  h: 354,
  x: 566,
  y: 444,
};

//  /api/edhic/area/metric/year   接口数据
var map_1_data = [
  { name: "上海分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "云南分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "四川分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "安徽分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "山东分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "广东分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "广西分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "江西分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "河北分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "河南分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "海南分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "深圳分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "湖北分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "贵州分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
  { name: "陕西分公司", premium: 79375, analysisRatio: 67, completeRatio: 85},
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
        // api: getApi("/api/edhic/cost/analysis/ratio"),
//        api: getApi("/api/edhic/area/metric/year"),
       
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

    map_title_1: {
      id: "map_title_1",
      attr: {
        x: 691,
        y: 444,
        w: 192,
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
        source: "公司各机构综合成本率情况",
        api: {},
        dcConfig: {},
      },
    },
    
    map_img_1: {
      ...dotlayer,
      id: "table_img_2",
      attr: {
        x: 669,
        y: 450,
        w: 14,
        h: 14,
        opacity: 1,
      },
    },
    map_img_2: {
      id: "map_img_2",
      type: "com",
      attr: {
        x: 653,
        y: 430,
        w: 614,
        h: 360,
        opacity: 1,
      },
      requirePath: "CustomBackground",
      config: {
        typeNo: 25,
      },
      data: {},
    },
    map_img_3: {
        ...shadowLayer,
        id: "map_img_3",
        attr: {
          x: 923,
          y: 450,
          w: 306,
          h: 14,
          opacity: 1,
        },
      },
  },
  zIndexList: [
    { id: "map_img_2" },
    { id: "map_1" },                
    { id: "map_cover_1" },
    { id: "map_title_1" },
    { id: "map_img_1" },
    { id: "map_img_3" },
  ],
};
export default config;
