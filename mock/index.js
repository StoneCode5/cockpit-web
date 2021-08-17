var express = require("express");
var cors = require("cors");
var app = express();
const Mock = require("mockjs");
const port = 9091;

app.use(cors());

class BaseRes {
  constructor({ code, data, message, success }) {
    this.code = code;
    if (data !== undefined) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
    if (success) {
      this.success = true;
    }
  }
}

class SuccessRes extends BaseRes {
  constructor(data = {}) {
    super({
      code: "00000",
      data,
      message: "成功",
      success: true,
    });
  }
}

class ErrorRes extends BaseRes {
  constructor(data = {}) {
    super({
      code: "1111",
      data,
      message: "失败",
      success: false,
    });
  }
}

// 签单保费 ++
app.get("/api/edhic/total/area", function (req, res) {
  const { list } = Mock.mock({
    "list|3": [
      {
        "label|+1": ["年度", "月度", "当日"],
        "value|10000-100000.2": 1,
      },
    ],
  });

  const data = new SuccessRes(list);
  res.json(data);
});

// 地图++
app.get("/api/edhic/today/area", function (req, res) {
  const { list } = Mock.mock({
    "list|14": [
      {
        "name|+1": [
          "广东分公司",
          "云南分公司",
          "海南分公司",
          "四川分公司",
          "江西分公司",
          "湖北分公司",
          "山东分公司",
          "安徽分公司",
          "广西分公司",
          "贵州分公司",
          "上海分公司",
          "河南分公司",
          "陕西分公司",
          "河北分公司",
        ],
        "customerNum|1-100000": 1,
        "instranceNum|1-100000": 1,
        "reportNum|1-100000": 1,
        "signMoney|10000-1000000.2": 1,
        "accreditationNum|10000-1000000.2": 1,
      },
    ],
  });
  const data = new SuccessRes(list);
  res.json(data);
});

// 近7日保单量趋势++
app.get("/api/edhic/nearest/policy", function (req, res) {
  const { list } = Mock.mock({
    "list|7": [
      {
        "label|+1": 10,
        "value|1-10000": 500,
      },
    ],
  });

  const data = new SuccessRes(list);
  res.json(data);
});

// 查询今日保单数量 ++
app.get("/api/edhic/today/policy", function (req, res) {
  const data = new SuccessRes(
    Mock.mock([
      { label: "合计", "value|1-10000": 500 },
      { label: "车险", "value|1-10000": 500 },
      { label: "非车险", "value|1-10000": 500 },
    ])
  );
  res.json(data);
});

// 近7日客户数趋势 ++
app.get("/api/edhic/nearest/customer", function (req, res) {
  const { list } = Mock.mock({
    "list|7": [
      {
        "label|+1": 10,
        "value|1-10000": 500,
      },
    ],
  });
  const data = new SuccessRes(list);
  res.json(data);
});
// 今日客户数量++
app.get("/api/edhic/today/customer", function (req, res) {
  const data = new SuccessRes(
    Mock.mock([
      { label: "合计", "value|1-10000": 500 },
      { label: "个人", "value|1-10000": 500 },
      { label: "团体", "value|1-10000": 500 },
    ])
  );
  res.json(data);
});
// 今日机构保费++
app.get("/api/edhic/today/company", function (req, res) {
  const data = new SuccessRes(
    Mock.mock([
      { label: "深圳", "value|1-10000": 500 },
      { label: "广东", "value|1-10000": 500 },
      { label: "广西", "value|1-10000": 500 },
      { label: "云南", "value|1-10000": 500 },
      { label: "湖北", "value|1-10000": 500 },
      { label: "河南", "value|1-10000": 500 },
      { label: "江西", "value|1-10000": 500 },
      { label: "陕西", "value|1-10000": 500 },
      { label: "贵州", "value|1-10000": 500 },
      { label: "海南", "value|1-10000": 500 },
      { label: "四川", "value|1-10000": 500 },
      { label: "上海", "value|1-10000": 500 },
      { label: "山东", "value|1-10000": 500 },
      { label: "河北", "value|1-10000": 500 },
      { label: "安徽", "value|1-10000": 500 },
    ])
  );
  res.json(data);
});
// 近7日保费趋势++
app.get("/api/edhic/nearest/product", function (req, res) {
  const { list } = Mock.mock({
    "list|7": [
      {
        "label|+1": 10,
        "value|1-10000": 500,
      },
    ],
  });
  const data = new SuccessRes(list);
  res.json(data);
});

// 今日各渠道保费++
app.get("/api/edhic/today/channel", function (req, res) {
  const { mockData } = Mock.mock({
    "mockData|7": [
      {
        "name|+1": [
          "直接业务",
          "个人代理",
          "专业代理",
          "网上业务",
          "兼业代理",
          "经纪人一类",
          "经纪人二类",
        ],
        "value|1000-100000.1-2": 1,
      },
    ],
  });
  // console.log(aaaaa.asdf.2131)

  // const data = new SuccessRes(mockData);
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
      { name: "经纪人一类", value: 21.27 },
      { name: "兼业代理", value: 60.81 },
      { name: "个人代理", value: 280.54 },
      { name: "经纪人二类", value: 9.42 },
      { name: "直接业务", value: 85.4 },
    ],
  };
  res.json(data);
});

// A类产品年度保费达成（万）- 总量++
app.get("/api/edhic/today/market/total", function (req, res) {
  // const data = new SuccessRes(
  //   Mock.mock({
  //     "targetSum|90000000-100000000": 500,
  //     "premiumSum|9000000-90000000": 500,
  //     "percent|1-100": 1,
  //   })
  // );
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: { premiumSum: 186064, targetSum: 290900, percent: 63 },
  };
  res.json(data);
});

// A类产品年度保费达成（万）- 明细++
app.get("/api/edhic/today/market", function (req, res) {
  // const data = new SuccessRes(
  //   Mock.mock([
  //     { label: "深圳", "current": 9900, "target": 9000 },
  //     { label: "广东", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "广西", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "云南", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "湖北", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "河南", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "江西", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "陕西", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "贵州", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "海南", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "四川", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "上海", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "山东", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "河北", "current|100-9000": 100, "target|9000-10000": 100 },
  //     { label: "安徽", "current|100-9000": 100, "target|9000-10000": 100 },
  //   ])
  // );
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };

  res.json(data);
});

// 今日保费++
app.get("/api/edhic/today/product", function (req, res) {
  const { list } = Mock.mock({
    "list|3": [
      {
        "label|+1": 10,
        "value|1-10000": 500,
      },
    ],
  });

  const data = new SuccessRes(list);
  res.json(data);
});

// 今日话务量++
app.get("/api/edhic/nearest/traffic", function (req, res) {
  const { list } = Mock.mock({
    "list|7": [
      {
        "date|+1": ["01", "02", "03", "04", "05", "06", "07"],
        "type|+1": ["7日接通量", "7日话务量"],
        "value|1000-10000": 1,
      },
    ],
  });

  const data = new SuccessRes(list);
  res.json(data);
});

// 分险类“生效保费”及增速++
app.get("/api/edhic/class/income", function (req, res) {
  const mockRes = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
      {
        className: "交强险",
        dayCurrent: 202.02,
        dayPrevious: 205.52,
        dayRatio: "-1.70",
        monthCurrent: 3136.77,
        monthPrevious: 6601.48,
        monthRatio: "-52.48",
        yearCurrent: 46443.95,
        yearPrevious: 46443.95,
        yearRatio: "0.43",
      },
      {
        className: "企业财产保险",
        dayCurrent: 20.54,
        dayPrevious: 138.4,
        dayRatio: "-85.16",
        monthCurrent: 428.49,
        monthPrevious: 1603.36,
        monthRatio: "-73.28",
        yearCurrent: 6787.07,
        yearPrevious: 6787.07,
        yearRatio: "0.30",
      },
      {
        className: "保证保险",
        dayCurrent: 3.33,
        dayPrevious: 7.17,
        dayRatio: "-53.52",
        monthCurrent: 242.8,
        monthPrevious: 432.03,
        monthRatio: "-43.80",
        yearCurrent: 1542.75,
        yearPrevious: 1542.75,
        yearRatio: "0.22",
      },
      {
        className: "家庭财产保险",
        dayCurrent: 0.08,
        dayPrevious: 0.13,
        dayRatio: "-37.35",
        monthCurrent: 1.8,
        monthPrevious: 36.66,
        monthRatio: "-95.08",
        yearCurrent: 49.78,
        yearPrevious: 49.78,
        yearRatio: "0.17",
      },
      {
        className: "工程保险",
        dayCurrent: 9.67,
        dayPrevious: 91.37,
        dayRatio: "-89.41",
        monthCurrent: 240.23,
        monthPrevious: 385.38,
        monthRatio: "-37.66",
        yearCurrent: 5259.75,
        yearPrevious: 5259.75,
        yearRatio: "0.18",
      },
      {
        className: "意外险",
        dayCurrent: 72.33,
        dayPrevious: 65.79,
        dayRatio: "9.95",
        monthCurrent: 920.66,
        monthPrevious: 2691.52,
        monthRatio: "-65.79",
        yearCurrent: 24322.42,
        yearPrevious: 24322.42,
        yearRatio: "0.30",
      },
      {
        className: "机动车辆保险",
        dayCurrent: 354.57,
        dayPrevious: 383.73,
        dayRatio: "-7.60",
        monthCurrent: 5759.89,
        monthPrevious: 11072.93,
        monthRatio: "-47.98",
        yearCurrent: 80430.25,
        yearPrevious: 80430.25,
        yearRatio: "0.44",
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
        dayCurrent: 5.83,
        dayPrevious: 3.09,
        dayRatio: "88.74",
        monthCurrent: 232.21,
        monthPrevious: 1667.25,
        monthRatio: "-86.07",
        yearCurrent: 10371.88,
        yearPrevious: 10371.88,
        yearRatio: "0.06",
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
    ],
  };
  res.json(mockRes);
});

// 分险类“签单保费”及增速++
app.get("/api/edhic/class/sign", function (req, res) {
  const mockRes = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };
  res.json(mockRes);
});

// 综合成本率--
app.get("/api/edhic/cost/analysis/ratio", function (req, res) {
  // const { list } = Mock.mock({
  //   "list|14": [
  //     {
  //       "name|+1": ["广东分公司", "云南分公司", "海南分公司", "四川分公司", "江西分公司","湖北分公司","山东分公司","安徽分公司","广西分公司","贵州分公司","上海分公司","河南分公司","陕西分公司","河北分公司",],
  //       "value|1-200": 1,
  //     },
  //   ],
  // });
  // const data = new SuccessRes(list);
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
      { name: "深圳分公司", value: "80.19" },
      { name: "广东分公司", value: "65.79" },
      { name: "广西分公司", value: "70.59" },
      { name: "云南分公司", value: "74.70" },
      { name: "贵州分公司", value: "77.07" },
      { name: "海南分公司", value: "80.08" },
      { name: "四川分公司", value: "126.57" },
      { name: "上海分公司", value: "114.15" },
      { name: "湖北分公司", value: "111.60" },
      { name: "河南分公司", value: "117.08" },
      { name: "江西分公司", value: "113.17" },
      { name: "陕西分公司", value: "128.00" },
      { name: "山东分公司", value: "121.45" },
      { name: "河北分公司", value: "119.29" },
      { name: "安徽分公司", value: "128.31" },
    ],
  };
  res.json(data);
});

// 昨日保费 当月保费 当年保费++
app.get("/api/edhic/type/income", function (req, res) {
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };
  res.json(data);
});

// 当日签单 当月签单 当年签单++
app.get("/api/edhic/type/sign", function (req, res) {
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };
  res.json(data);
});

// 机构当日签单保费--
app.get("/api/edhic/company/type/day", function (req, res) {
  // const data = new SuccessRes(
  //   Mock.mock([
  //     { label: "深圳", A: 9900, B: 9000 },
  //     { label: "广东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "广西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "云南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "湖北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "江西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "陕西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "贵州", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "海南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "四川", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "上海", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "山东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "安徽", "A|100-9000": 100, "B|9000-10000": 100 },
  //   ])
  // );
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
      { dateType: "day", companyName: "上海分公司", a: 0.187696, b: 0.0460392 },
      { dateType: "day", companyName: "云南分公司", a: 6.259755, b: 1.260551 },
      {
        dateType: "day",
        companyName: "四川分公司",
        a: 10.888198,
        b: 2.1949396,
      },
      { dateType: "day", companyName: "安徽分公司", a: 6.050491, b: 1.2205982 },
      { dateType: "day", companyName: "山东分公司", a: 2.048656, b: 0.4205312 },
      {
        dateType: "day",
        companyName: "广东分公司",
        a: 19.306104,
        b: 3.8636208,
      },
      { dateType: "day", companyName: "广西分公司", a: 6.939183, b: 1.3978366 },
      {
        dateType: "day",
        companyName: "江西分公司",
        a: 15.449017,
        b: 3.0925034,
      },
      { dateType: "day", companyName: "河北分公司", a: 7.050756, b: 1.4180512 },
      { dateType: "day", companyName: "河南分公司", a: 9.998411, b: 2.0088822 },
      { dateType: "day", companyName: "海南分公司", a: 0.47754, b: 0.105808 },
      { dateType: "day", companyName: "深圳分公司", a: -1.01171, b: -0.200542 },
      { dateType: "day", companyName: "湖北分公司", a: 6.558181, b: 1.3164362 },
      {
        dateType: "day",
        companyName: "贵州分公司",
        a: 14.736188,
        b: 2.9618376,
      },
      { dateType: "day", companyName: "陕西分公司", a: 1.035446, b: 0.2073892 },
    ],
  };
  res.json(data);
});
// 机构当月签单保费++
app.get("/api/edhic/company/type/month", function (req, res) {
  // const data = new SuccessRes(
  //   Mock.mock([
  //     { label: "深圳", A: 9900, B: 9000 },
  //     { label: "广东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "广西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "云南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "湖北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "江西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "陕西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "贵州", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "海南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "四川", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "上海", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "山东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "安徽", "A|100-9000": 100, "B|9000-10000": 100 },
  //   ])
  // );

  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };
  res.json(data);
});

// 机构当年签单保费++
app.get("/api/edhic/company/type/year", function (req, res) {
  // const data = new SuccessRes(
  //   Mock.mock([
  //     { label: "深圳", A: 9900, B: 9000 },
  //     { label: "广东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "广西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "云南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "湖北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "江西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "陕西", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "贵州", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "海南", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "四川", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "上海", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "山东", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "河北", "A|100-9000": 100, "B|9000-10000": 100 },
  //     { label: "安徽", "A|100-9000": 100, "B|9000-10000": 100 },
  //   ])
  // );

  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: [
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
    ],
  };
  res.json(data);
});


// 签单总保费--
app.get("/api/edhic/total/year/sign/premium", function (req, res) {
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: {
      yearTotalPremium: 169247.63,
      unifyPremium: 18377.02,
      carPremium: 912.41,
      notCarPremium: 100,
    },
  };
  res.json(data);
});

// 生效总保费--
app.get("/api/edhic/total/year/income/premium", function (req, res) {
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: {
      yearTotalPremium: 169247.63,
      unifyPremium: 18377.02,
      carPremium: 912.41,
      notCarPremium: 100,
    },
  };
  res.json(data);
});

// 生效总保费++
app.get("/api/edhic/total/year/income/premium/all", function (req, res) {
  const data = {
    success: true,
    code: "00000",
    message: "成功",
    data: {
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
    },
  };
  res.json(data);
});

// 年成本率++
app.get("/api/edhic/area/metric/year", function (req, res) {
  const { list } = Mock.mock({
    "list|14": [
      {
        "name|+1": [
          "广东分公司",
          "云南分公司",
          "海南分公司",
          "四川分公司",
          "江西分公司",
          "湖北分公司",
          "山东分公司",
          "安徽分公司",
          "广西分公司",
          "贵州分公司",
          "上海分公司",
          "河南分公司",
          "陕西分公司",
          "河北分公司",
        ],
        "premium|1-100000": 1,
        "analysisRatio|1-100": 1,
        "completeRatio|1-100": 1,
      },
    ],
  });
  const data = new SuccessRes(list);
  // const data = {
  //   success: true,
  //   code: "00000",
  //   message: "成功",
  //   data: [
  //     {
  //         "companyName": "广东分公司",
  //         "premium": 159498.66,
  //         "analysisRatio": "43.43%",
  //         "completeRatio": "43.43%",
  //         "premiumType": "生效保费"
  //     },
  //     {
  //         "companyName": "四川分公司",
  //         "premium": 1498.66,
  //         "analysisRatio": "13.13%",
  //         "completeRatio": "51.01%",
  //         "premiumType": "生效保费"
  //     }
  // ],
  // };
  res.json(data);
});


app.listen(port, (err) => {
  console.log(`next application is running on ${port} port !`);
  console.log("err", err);
});
