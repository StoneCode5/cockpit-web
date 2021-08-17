// import Big from 'big.js'

/**
 * 将数字分段显示，每三位用逗号隔开
 * @param {Number} value
 */
export function getCsvNumber(value: number, isToFixedTo2 = false) {
  if (!value) return "0";
  let intPart = null;
  if (value.toString().indexOf(".") === -1) {
    // 判断是否是整数并获取整数部分
    intPart = value;
  } else {
    intPart = Number(value).toFixed(0);
  }
  // 将整数部分逢三一断
  const intPartFormat = intPart
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");

  let floatPart = ""; // '' | '.00':预定义小数部分
  const value2Array = value.toString().split(".");

  // =2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString(); // 拿到小数部分

    if (floatPart.length === 1) {
      // 补0
      return `${intPartFormat}.${floatPart}0`;
    }
    return `${intPartFormat}.${floatPart}`;
  } else  if (isToFixedTo2) {
    floatPart = '.00'
  }
  return intPartFormat + floatPart;
}


// Polyfill
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};

type AnimationValueCallback = (curr: number) => void;
/**
 *
 * @param start 开始数字
 * @param end 结束数字
 * @param duration 总时长
 * @param callback 回调，参数为当前值
 */
export function animateValue(
  start: number,
  end: number,
  duration: number,
  callback: AnimationValueCallback,
) {
  let startTimestamp: DOMHighResTimeStamp;

  const step = (timestamp: DOMHighResTimeStamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const result = progress * (end - start) + start
    if (Number.isInteger(end)) {
      callback(parseInt(result.toFixed(0), 10));
    } else {
      callback(parseFloat(result.toFixed(2)));
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
