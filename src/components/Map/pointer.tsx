import React from "react";
import Container from "../DashBoard/Container";
import "./pointer.less";

function Pointer() {
  const commonAttr = {
    w: 35,
    h: 35,
    deg: 0,
    opacity: 1,
  };

  const config = [
    // 广州
    {
      x: 535,
      y: 458,
      id: "pointGZ",
      ...commonAttr,
    },
    // 广西
    {
      x: 484,
      y: 464,
      id: "pointGX",
      ...commonAttr,
    },
    // 云南
    {
      x: 424,
      y: 447,
      id: "pointYN",
      ...commonAttr,
    },
    // 贵州
    {
      x: 467,
      y: 413,
      id: "pointGZ",
      ...commonAttr,
    },
    // 海南
    {
      x: 500,
      y: 512,
      id: "pointHN",
      ...commonAttr,
    },
    // 四川
    {
      x: 426,
      y: 358,
      id: "pointSC",
      ...commonAttr,
    },
    // 上海
    {
      x: 620,
      y: 345,
      id: "pointSH",
      ...commonAttr,
    },
    // 湖北
    {
      x: 545,
      y: 360,
      id: "pointHB",
      ...commonAttr,
    },
    // 河南
    {
      x: 539,
      y: 305,
      id: "pointHN",
      ...commonAttr,
    },
    // 江西
    {
      x: 560,
      y: 389,
      id: "pointJX",
      ...commonAttr,
    },
    // 陕西
    {
      x: 488,
      y: 305,
      id: "pointSX",
      ...commonAttr,
    },
    // 山东
    {
      x: 583,
      y: 277,
      id: "pointSD",
      ...commonAttr,
    },
    // 河北
    {
      x: 552,
      y: 258,
      id: "pointHB",
      ...commonAttr,
    },
    // 安徽
    {
      x: 575,
      y: 343,
      id: "pointAH",
      ...commonAttr,
    },
  ];

  return config.map((item, index) => (
    <Container attr={item} id={item.id} key={item.id}>
      <div
        className="container"
        id={item.id}
        key={item.id}
        style={{ width: "100%", height: "100%", }}
      >
        <div className="dot"></div>
        <div className="pulse" style={{animationDuration: `${2+index * 0.2}s`}}></div>
        <div className="pulse1" style={{animationDuration: `${2+index * 0.2}s`}}></div>
      </div>
    </Container>
  ));
}

export default Pointer;
