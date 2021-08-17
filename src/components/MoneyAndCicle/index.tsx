import React, { useState } from "react";
import { NumberAndTitle } from "../NumberAndTitle";
import { Number2 } from "../Number2";
import { CustomBackground } from "../CustomBackground";
import DoubleCircle from "../DoubleCircle";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";
import { useEffect } from "react";

function MoneyAndCicle(props: any) {
  const { config = {}, data = [0, 0] } = props;
  const [test, setTest] = useState(12345);
  const { mainTitle, subTitleA = "A类", subTitleB = "B类" } = config;

  const NumberStyle = {
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 700,
    letterSpacing: 0,
  };
  useEffect(() => {
    setInterval(() => {
      setTest(77713789);
    }, 1000);
  }, []);
  const computedPercent = (val: any) => val / (data[0] + data[1]);

  const innerConfig = {
    height: 30,
    width: 30,
    autoFit: false,
    percent: computedPercent(data[1]),
    color: [
      "l(0) 0:rgba(243,168,19, 0.2) 1:rgba(243,168,19, 1)",
      "rgba(243,168,19, 0.1)",
    ],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: false,
      content: false,
    },
  };                         
  const outerConfig = {
    height: 45,
    width: 45,
    autoFit: false,
    percent: computedPercent(data[0]),
    color: [
      "l(0) 0:rgba(93,128,255, 0.2) 1:rgba(93,128,255, 0.8)",
      "rgba(93,128,255, 0.1)",
    ],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: false,
      content: false,
    },
  };

  return (
    <div className="moneyAndCicleContainer">
      <div className="topBox">
        <div className="imgBox">
          <CustomBackground typeNo={22} />
        </div>
        <span className="mainTitle">{mainTitle}</span>
        <div className="circle">
          <DoubleCircle innerConfig={innerConfig} outerConfig={outerConfig} />
        </div>
      </div>
      <div className="titleBox">
        <div className="feeBox">
          <span className="subTitle">{subTitleA}</span>
          <span className="numberBox">
            <Number2
              data={data[0]}
              isThousands
              color="rgba(93,128,255, 1)"
              backgroundColor="rgba(93,128,255, 0.2)"
            />
          </span>
        </div>
        <div className="feeBox">
          <span className="subTitle">{subTitleB}</span>
          <span className="numberBox">
            <Number2
              data={data[1]}
              isThousands
              color="rgba(246,170,20, 1)"
              backgroundColor="rgba(246,170,20, 0.2)"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default WithContainer(MoneyAndCicle);
