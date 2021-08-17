import { getApi, CONFIG } from "./common";
import { getCsvNumber } from "../../utils/utils";
const { AUTO_UPDATE } = CONFIG;

const handleRes = (data: any) => {
  return [
    {
      type: "已完成",
      value: data.percent,
      centerText: data.premiumSum,
    },
    {
      type: "未完成",
      value: 100 - data.percent,
      centerText: data.premiumSum,
    },
  ];
};

//  /api/edhic/today/market/total   接口数据
var pie_1_data = [
  {
    type: "已完成",
    value: 63,
    centerText: 290900,
  },
  {
    type: "未完成",
    value: 37,
    centerText: 186064,
  },
]

const config = {
  layers: {
    pie_1: {
      id: "pie_1",
      attr: {
        x: 655,
        y: 891,
        w: 120,
        h: 120,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },
      config: {
        config: {
          appendPadding: 10,
          angleField: "value",
          colorField: "type",
          color: ({ type }: any) => {
            if (type === "未完成") {
              return "#fff";
            }
            // return "l(0) 0:#FF7E11 1:#F99A13";
            return "l(0) 0:rgba(246,170,20, 0.2) 1:rgba(246,170,20, 1)";
          },
          radius: 1,
          innerRadius: 0.8,
          // label: {
          //   type: "inner",
          //   offset: "-50%",
          //   content: "{value}%",
          //   autoRotate: false,
          //   // github上找到这个参数 文档中没看到....
          //   callback: (value: any, type: any) => {
          //     const isUnComplete = type === "未完成";
          //     return {
          //       style: {
          //         textAlign: "center",
          //         fontSize: 11,
          //         fill: "#031239",
          //         fillOpacity: isUnComplete ? 0 : 1,
          //         fontWeight: 500,
          //       },
          //     };
          //   },
          // },
          label: false,
          pieStyle: (item: any) => {
            return {
              fillOpacity: item.type === "未完成" ? 0.08 : 1,
            };
          },
          legend: false,
          statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: "pre-wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#FF9E0D",
                fontSize: 14,
                fontWeight: 400,
                marginTop: '3px',
                lineHeight: '22px',
              },
              formatter: (text: any, data: any) => {
                return `${getCsvNumber(data[0].centerText)}\n${data[0].value}%`
              },
            },
          },
        },
      },
      data: {
        source: pie_1_data,
//        api: getApi("/api/edhic/today/market/total", handleRes),
        autoUpdate: AUTO_UPDATE,
        dcConfig: {},
      },
      requirePath: "Pie",
    },
    pie_title_1: {
      id: "pie_title_1",
      attr: {
        x: 661,
        y: 1027,
        w: 96,
        h: 12,
        deg: 0,
        opacity: 1,
        sizeLock: false,
        flipH: false,
        flipV: false,
      },

      requirePath: "Title",
      config: {
        textStyle: {
          opacity: 0.3,
          fontFamily: "PingFangSC-Regular",
          fontSize: "12px",
          color: "#FFFFFF",
          letterSpacing: 0,
          textAlign: "center",
          lineHeight: "12px",
        },
        textAlign: "center",
      },
      data: {
        source: "年度达成率",
        api: {},
        dcConfig: {},
      },
    },
  },
  zIndexList: [
    { id: "pie_1", type: "com" },
    { id: "pie_title_1", type: "com" },
  ],
};
export default config;
