// 公用的一些配置
export const CONFIG = {
  AUTO_UPDATE: 20 * 1000, //单位 ms
  STALE_TIME: 10 * 1000, // 重新请求有效期 ms
  // AUTO_UPDATE: 0  //单位 ms
};

export const titleTextCommon = {
  // color: "#EFEFF1", V4
  color: "#DBDBEE", // V5
  letterSpacing: 0,
  fontWeight: 500,
};

export const titleTextStyleNormal = {
  ...titleTextCommon,
  fontSize: 16,
};

export const titleTextStyleLarge = {
  ...titleTextCommon,
  fontSize: 22,
};

export const titleTextStyleXLarge = {
  ...titleTextCommon,
  fontSize: 32,
};

export const dotlayer = {
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
    typeNo: 22,
  },
  data: {},
}

export const shadowLayer = {
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
    typeNo: 23,
  },
  data: {},
}

export const getApi = (
  api: string,
  handleRes: any = "",
  method: "get" | "post" = "get",
  staleTime: number = CONFIG.STALE_TIME
): DashBoard.Api => {
  return {
    url: `http://127.0.0.1:9091${api}`,
    method,
    handleRes,
    staleTime,
  };
};
