import { titleTextCommon } from "../common";

const config = {
  layers: {
    title_pie_1: {
      id: "title_pie_1",
      attr: {
        x: 869,
        y: 7,
        w: 208,
        h: 26,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },

      requirePath: "Title",
      config: {
        textStyle: {
          ...titleTextCommon,
          fontSize: "26px",
        },
        textAlign: "left",
      },
      data: {
        // source: "运营态势感知系统",
        source: "经营数据仪表盘",
        
        api: {},
        dcConfig: {},
      },
    },
    title_background_1: {
      id: "title_background_1",
      type: "com",
      attr: {
        x: 618,
        y: 24,
        w: 684,
        h: 10,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 24,
      },
      data: {},
      version: "0.0.12",
    },
    title_decorate_1: {
        id: "title_decorate_1",
        type: "com",
        attr: {
          x: 771,
          y: 52,
          w: 59,
          h: 9,
          opacity: 1,
        },
        comName: "customBackground",
        requirePath: "CustomBackground",
        config: {
          typeNo: 20,
        },
        data: {},
        version: "0.0.12",
      },
      title_decorate_2: {
        id: "title_decorate_2",
        type: "com",
        attr: {
          x: 1092,
          y: 52,
          w: 59,
          h: 9,
          opacity: 1,
        },
        comName: "customBackground",
        requirePath: "CustomBackground",
        config: {
          typeNo: 21,
        },
        data: {},
        version: "0.0.12",
      },
      title_decorate_3: {
        id: "title_decorate_3",
        type: "com",
        attr: {
          x: 0,
          y: 0,
          w: 1920,
          h: 85,
          opacity: 1,
        },
        comName: "customBackground",
        requirePath: "CustomBackground",
        config: {
          typeNo: 19,
        },
        data: {},
        version: "0.0.12",
      },
      title_timer_1: {
        id: "title_timer_1",
        attr: {
          w: 172,
          h: 16,
          x: 897,
          y: 52,
          deg: 0,
          opacity: 1,
          sizeLock: false,
          flipH: false,
          flipV: false,
        },
        config: {
          textStyle: {
            fontSize: 14,
            color: "#5D80FF",
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
  },
  zIndexList: [
    { id: "title_pie_1" },
    { id: "title_background_1" },
    { id: "title_decorate_1" },
    { id: "title_decorate_2" },
    { id: "title_decorate_3" },
    { id: "title_timer_1" },
  ],
};
export default config;
