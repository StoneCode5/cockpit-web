import React from "react";
import { WithContainer } from "../DashBoard/withContainer";
import './index.less';

const DEFAULTSTYLE = {
  fontSize: 30,
  color: "#fff",
  fontWeight: "normal",
};

const Title: React.FC = (props: any) => {
  const { data = "标题", textAlign = "center", textStyle = DEFAULTSTYLE } = props;
  return <div className={textAlign === "center"?"title":''} style={{ ...textStyle, textAlign: textAlign }}>{data}</div>;
};
export default WithContainer(Title);
