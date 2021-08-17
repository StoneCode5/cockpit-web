import React  from "react";
import { WithContainer } from "../DashBoard/withContainer";
import "./index.less";
import RoundItem from "./round";
const RoundListComponent: React.FC<any> = (props) => {
  const { data, config} = props;
  return (
    <div className="list">
      {data && data.map((item: any, index: number) => (
        <RoundItem data={item} config={config[index]} key={index}></RoundItem>
      ))}
    </div>
  );
};

export default WithContainer(RoundListComponent);
