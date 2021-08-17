import { getApi, CONFIG } from "./common";
import { getCsvNumber } from "../../utils/utils";
const { AUTO_UPDATE } = CONFIG;

const COLUMN_COMMON_CONFIG = {
  xField: "label",
  yField: "value",
  yAxis: {
    grid: {
      line: {
        style: {
          stroke: "#fff",
          lineWidth: 1,
          lineDash: [1, 4],
          strokeOpacity: 0.1,
          shadowColor: "black",
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer",
        },
      },
    },
  },
  xAxis: {
    label: {
      style: {
        fill: "#fff",
        opacity: 0.5,
        fontSize: 8,
      },
    },
  },
  maxColumnWidth: 8,
  columnBackground: {
    style: {
      fill: "#fff",
      fillOpacity: 0,
    },
  },
  meta: {
    label: { alias: "城市" },
    value: { alias: "保费" },
  },
  tooltip: false,
}

const COLUMN_COMMON_ATTR = {
  w: 372,
  h: 215,
  deg: 0,
  opacity: 1,
  sizeLock: false,
  flipH: false,
  flipV: false,
}

const config = {
  layers: {
    column_1:{
      id: "column_1",
      attr: {
        x: 553,
        y: 183,
        ...COLUMN_COMMON_ATTR,
      },
      config: {
        config: {
          ...COLUMN_COMMON_CONFIG, 
          label: {
            style: {
              fill: "#F99A13",
              opacity: 1,
              fontSize: 8,
            },
            position: "top",
          },
          color: "l(270) 0:#FF7E11 1:#F99A13",
        },
      },
      data: {
        // source: [],
        api: getApi("/api/edhic/today/company"),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
      requirePath: "Column",
    },
    column_2:{
      id: "column_2",
      attr: {
        x: 1000,
        y: 183,
        ...COLUMN_COMMON_ATTR,
      },
      config: {
        config: {
          ...COLUMN_COMMON_CONFIG, 
          label: {
            style: {
              fill: "#8EC8FF",
              opacity: 1,
              fontSize: 8,
            },
            position: "top",
          },
          color: "l(270) 0:#44A5FF 1:#8EC9FF",
        },
      },
      data: {
        // source: [],
        api: getApi("/api/edhic/today/company"),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
      requirePath: "Column",
    },
    // title_column_1: {
    //   id: "title_column_1",
    //   attr: {
    //     x: 605,
    //     y: 1015,
    //     w: 96,
    //     h: 12,
    //     deg: 0,
    //     opacity: 1,
    //     sizeLock: false,
    //     flipH: false,
    //     flipV: false,
    //   },

    //   requirePath: "Title",
    //   config: {
    //     textStyle: {
    //       opacity: 0.3,
    //       fontFamily: "PingFangSC-Regular",
    //       fontSize: "12px",
    //       color: "#FFFFFF",
    //       letterSpacing: 0,
    //       textAlign: "center",
    //       lineHeight: "12px",
    //     },
    //     textAlign: "center",
    //   },
    //   data: {
    //     source: "年度达成率",
    //     api: {},
    //     dcConfig: {},
    //   },
    // },
  },
  zIndexList: [
    { id: "column_1"},
    { id: "column_2"},
    // { id: "title_column_1"},
  ],
};
export default config;
