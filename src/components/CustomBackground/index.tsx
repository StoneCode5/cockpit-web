import React from "react";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";

interface Props {
  typeNo: number;
  custom?: boolean
  background?: any;
}

export const CustomBackground = (props: Props) => {
  const { typeNo = 1, custom = false, background = {} } = props;
  return custom ? <div style={{ ...background }} /> : <div className={`background-layer bl-no-${typeNo}`} />;

};

export default WithContainer(CustomBackground);
