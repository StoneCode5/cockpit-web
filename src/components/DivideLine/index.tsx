import React from "react";
import { WithContainer } from "../DashBoard/withContainer";

function DivideLine(props: any) {
  //  horizontal
  const { style = {} } = props;
  return <div style={{ ...style }} />;
}

export default WithContainer(DivideLine);
