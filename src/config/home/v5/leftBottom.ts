import { CONFIG, getApi, dotlayer, titleTextStyleNormal } from "../common";
const { AUTO_UPDATE } = CONFIG;

interface Item {
  companyName: string;
  a: number;
  b: number;
}

const jgdySize = {
  width: 580,
  height: 230
}
const handleData =  (data: Item[]) => {
  const res: any = [[], [], []];
  data.forEach((d: Item) => {
    res[0].push(d.companyName.slice(0, 2));
    res[1].push(d.a);
    res[2].push(d.b);
  });
  return res;
}
const handleData2 =  (data: Item[]) => {
  const res: any = [[], [], [], []];
  data.forEach((d: Item) => {
    res[0].push(d.companyName.slice(0, 2));
    res[1].push(d.a);
    res[2].push(d.b);
    res[3].push(d.a + d.a);
  });
  return res;
}

//  /api/edhic/company/type/month   接口数据
const jgdrData = [
  {
    dateType: "month",
    companyName: "上海分公司",
    a: 529.3,
    b: 106.0,
  },
  {
    dateType: "month",
    companyName: "云南分公司",
    a: 1713.89,
    b: 2142.95,
  },
  {
    dateType: "month",
    companyName: "四川分公司",
    a: 2613.23,
    b: 122.83,
  },
  {
    dateType: "month",
    companyName: "安徽分公司",
    a: 586.183028,
    b: 117.4059056,
  },
  {
    dateType: "month",
    companyName: "山东分公司",
    a: 473.635477,
    b: 94.8889954,
  },
  {
    dateType: "month",
    companyName: "广东分公司",
    a: 2983.462768,
    b: 596.8828536,
  },
  {
    dateType: "month",
    companyName: "广西分公司",
    a: 1041.954953,
    b: 208.5659906,
  },
  {
    dateType: "month",
    companyName: "江西分公司",
    a: 433.3939,
    b: 86.83938,
  },
  {
    dateType: "month",
    companyName: "河北分公司",
    a: 300.709465,
    b: 60.324093,
  },
  {
    dateType: "month",
    companyName: "河南分公司",
    a: 559.112687,
    b: 112.0045374,
  },
  {
    dateType: "month",
    companyName: "海南分公司",
    a: 173.059998,
    b: 34.7699996,
  },
  {
    dateType: "month",
    companyName: "深圳分公司",
    a: 589.220237,
    b: 118.0191474,
  },
  {
    dateType: "month",
    companyName: "湖北分公司",
    a: 520.056103,
    b: 104.1922206,
  },
  {
    dateType: "month",
    companyName: "贵州分公司",
    a: 1140.752248,
    b: 228.3451496,
  },
  {
    dateType: "month",
    companyName: "陕西分公司",
    a: 315.089487,
    b: 63.1365974,
  },
]

//  /api/edhic/company/type/month   接口数据
var jgdr_data = handleData(jgdrData)
var jgdy_2_data = handleData2(jgdrData)
//  /api/edhic/company/type/year   接口数据
var jgdy_1_data = handleData2(jgdrData)

const leftBottomConfig = {
  layers: {
    jgdr: {
      id: "jgdr",
      attr: {
        x: 20,
        y: 500,
        w: 580,
        h: 300,
      },
      config: {},
      data: {
        source: jgdr_data,
//        api: getApi("/api/edhic/company/type/month", function (data: Item[]) {
        //   const res: any = [[], [], []];
        //   data.forEach((d: Item) => {
        //     res[0].push(d.companyName.slice(0, 2));
        //     res[1].push(d.a);
        //     res[2].push(d.b);
        //   });
        //   return res;
        // }),
        autoUpdate: AUTO_UPDATE,
      },
      requirePath: "Column3",
    },
    jgdy_1: {
      id: "jgdy_1",
      attr: {
        x: 35,
        y: 810,
        w: jgdySize.width,
        h: jgdySize.height,
      },
      config: {
        config: {
          type: 2,
          width: jgdySize.width,
          height: jgdySize.height,
        }
      },
      data: {
        source: jgdy_1_data,
//      api: getApi("/api/edhic/company/type/year", function (data: Item[]) {
        //   const res: any = [[], [], [], []];
        //   data.forEach((d: Item) => {
        //     res[0].push(d.companyName.slice(0, 2));
        //     res[1].push(d.a);
        //     res[2].push(d.b);
        //     res[3].push(d.a + d.a);
        //   });
        //   return res;
        // }),
        autoUpdate: AUTO_UPDATE,
      },
      requirePath: "Column4",
    },
    jgdy_2: {
      id: "jgdy_2",
      attr: {
        x: 35,
        y: 510,
        w: jgdySize.width,
        h: jgdySize.height,
      },
      config: {
        config: {
          type: 1,
          width: jgdySize.width,
          height: jgdySize.height,
        }
      },
      data: {
        source: jgdy_2_data,
      	//api: getApi("/api/edhic/company/type/month", function (data: Item[]) {
        //   const res: any = [[], [], [], []];
        //   data.forEach((d: Item) => {
        //     res[0].push(d.companyName.slice(0, 2));
        //     res[1].push(d.a);
        //     res[2].push(d.b);
        //     res[3].push(d.a + d.a);
        //   });
        //   return res;
        // }),
        autoUpdate: AUTO_UPDATE,
      },
      requirePath: "Column4",
    },
    leftBottom_bg_1: {
      id: "leftBottom_bg_1",
      type: "com",
      attr: {
        x: 20,
        y: 431,
        w: 614,
        h: 629,
        opacity: 1,
      },
      comName: "customBackground",
      requirePath: "CustomBackground",
      config: {
        typeNo: 13,
      },
      data: {},
      version: "0.0.12",
    },
    leftBottom_dot_1: {
      ...dotlayer,
      id: "leftBottom_dot_1",
      attr: {
        x: 36,
        y: 451,
        w: 14,
        h: 14,
        opacity: 1,
      },
    },
    leftBottom_dot_2: {
      ...dotlayer,
      id: "leftBottom_dot_2",
      attr: {
        x: 36, 
        y: 775,
        w: 14,
        h: 14,
        opacity: 1,
      },
    },
    leftBottom_title_1: {
      id: "leftBottom_title_1",
      attr: {
        x: 58,
        y: 451,
        w: 160,
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
        source: "机构当月签单保费(万)",
        api: {},
        dcConfig: {},
      },
    },
    leftBottom_title_2: {
      id: "leftBottom_title_2 ",
      attr: {
        x: 58,
        y: 771,
        w: 160,
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
        source: "机构当年签单情况(万)",
        api: {},
        dcConfig: {},
      },
    },
  },
  zIndexList: [
    {id: 'leftBottom_bg_1'},
    {id: 'leftBottom_dot_1'},
    {id: 'leftBottom_dot_2'},
    {id: 'leftBottom_title_1'},
    {id: 'leftBottom_title_2'},
    // { id: "jgdr" },
    { id: "jgdy_1" },
    { id: "jgdy_2" },

    ],
};
export default leftBottomConfig;
