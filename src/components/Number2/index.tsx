import React, { useState, useEffect, useRef } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";

interface Props {
  data: number;
  isThousands: Boolean;
  maxLength?: number;
  isShowFloat?: Boolean;
  color: string;
  backgroundColor: string;
}

export const Number2 = (props: Props) => {
  const {
    data,
    isThousands = true,
    maxLength = 10,
    isShowFloat = true,
    color = "rgba(93,128,255, 1)",
    backgroundColor = "rgba(93,128,255, 0.2)",
  } = props;
  const [chars, setChars] = useState<string[]>([]);
  const container = useRef(null);
  const liRefList = useRef<any>([]);
  let isInvalidZero = true;
  const getRef = (dom: any) => {
    liRefList.current.push(dom);
  };
  // const [current, setCurrent] = useState<number>(0);
  const computedChars = (data: Number) => {
    let strNumber = "";
    const strArr = `${data}`.split(".");

    // 有小数部分
    if (strArr.length > 1) {
      // 只有一位小数
      if (strArr[1].length === 1) {
        strNumber = `${strArr[0]}.${strArr[1]}0`;
      } else {
        strNumber = `${data}`;
      }
    } else {
      // 只有整数
      strNumber = `${strArr[0]}.00`;
    }
    let chars = [];
    let zeroStr = "";
    const zeroAddCout = maxLength - strArr[0].length;
    for (let i = 1; i <= zeroAddCout; i++) {
      zeroStr += "0";
    }
    // 补0完成
    strNumber = `${zeroStr}${strNumber}`;
    const getSplitNumberStr = (str: string): string[] => {
      const intStr = str.split(".")[0];
      const floatStr = str.split(".")[1];
      const result = [];
      let count = 0;
      for (let i = intStr.length - 1; i > -1; i--) {
        const element = intStr[i];

        if (count === 3) {
          result.unshift(",");
          count = 0;
        }
        result.unshift(element);
        count += 1;
      }
      result.push(".");
      for (let j = 0; j < floatStr.length; j++) {
        const element = floatStr[j];
        result.push(element);
      }
      return result;
    };
    // 增加分割符号
    chars = getSplitNumberStr(strNumber);
    return {
      chars,
      zeroAddCout,
    };
  };

  const roll = (strs: any, unUseZeroNumber: number) => {
    const numbers = strs.filter((str: string) => isNumber(str));
    const numbersDom = liRefList.current;
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const ele = numbersDom[i];
      ele.style.transform = `translate(-50%, -${num * 10}%)`;
    }
  };

  const isNumber = (str: string) => /^\d$/.test(str);

  useEffect(() => {
    const { chars, zeroAddCout } = computedChars(data);
    setChars(chars);
    setTimeout(() => {
      roll(chars, zeroAddCout);
    }, 100);
    // container.current.children
  }, [data]);

  const isvalidChar = (str: string) => {
    if (str === "0" || str === "," || str === ".") {
      if (isInvalidZero) {
        return false;
      } else {
        isInvalidZero = false;
        return true;
      }
    } else {
      isInvalidZero = false;
      return true;
    }
  };

  const isLastTwoChar = (total: number, nowIndex: number) => {
    return nowIndex === total - 1 || nowIndex === total - 2;
  };

  return (
    <span className="Number2Container" ref={container}>
      {chars.map((str: string, index) => (
        // <div className={isNumber(str) ? 'numberItem' : ''}>
        <div
          key={index}
          className={
            isLastTwoChar(chars.length, index)
              ? "numberItem floatItem"
              : "numberItem"
          }
          style={{
            color,
            marginRight: isNumber(str) ? "3px" : "0",
            opacity: isvalidChar(str) ? 1 : 0.2,
          }}
        >
          {isNumber(str) ? (
            <span ref={getRef} style={{ backgroundColor }}>
              0123456789
            </span>
          ) : (
            <i>{str}</i>
          )}
        </div>
      ))}
    </span>
  );
};

export default WithContainer(Number2);
