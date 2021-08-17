import { CONFIG, getApi } from "../common";
const { AUTO_UPDATE } = CONFIG;

interface Item {
  companyName: string;
  a: number;
  b: number;
}

const divideLineSize = {
  w: 1,
  h: 76
}
//  /api/edhic/total/year/income/premium/all    接口数据
var ndbf_1_data = {
  premiumType: "保费收入",
  yearTotalPremium: 394199,
  insure: {
    carPremium: 128949.26,
    notCarPropertyPremium: 34912.64,
    notCarAccidentHealthPremium: 230238.9,
  },
  type: {
    unifyPremium: 201414.82,
    aPremium: 164514.32,
    bPremium: 28171.65,
  },
}

const ndbfConfig = {
  layers: {
    ndbf_1: {
      id: "ndbf_1",
      attr: {
        x: 653,
        y: 273,
        w: 614,
        h: 142,
      },
      config: {
        config: {
          type: "sign",
        },
      },
      data: {
        source: ndbf_1_data,
//        api: getApi("/api/edhic/total/year/income/premium/all"),
        autoUpdate: AUTO_UPDATE,
      },
      requirePath: "Ndbf",
    },
    // ndbf_2: {
    //   id: "ndbf_2",
    //   attr: {
    //     x: 960,
    //     y: 273,
    //     w: 307,
    //     h: 142,
    //   },
    //   config: {
    //     config: {
    //       type: "income",
    //     },
    //   },
    //   data: {
    //     api: getApi("/api/edhic/total/year/income/premium"),
    //     autoUpdate: AUTO_UPDATE,
    //   },
    //   requirePath: "Ndbf",
    // },
    ndbf_bg: {
      id: "ndbf_bg",
      type: "com",
      attr: {
        x: 653,
        y: 273,
        w: 614,
        h: 142,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 26,
      },
      data: {},
    },
    divideLine_1: {
      id: "divideLine_1",
      attr: {
        x: 957,
        y: 319,
        w: divideLineSize.w,
        h: divideLineSize.h,
        opacity: 1,
      },
      requirePath: "DivideLine",
      config: {
        style: {
          height: divideLineSize.h,
          width: divideLineSize.w,
          backgroundColor: '#fff',
          opacity: 0.08
        }
      },
      data: {},
    },
  },
  
  zIndexList: [{ id: "ndbf_bg" }, { id: "ndbf_1" }, { id: "ndbf_2" },
  // { id: "divideLine_1" },
],
};
export default ndbfConfig;
