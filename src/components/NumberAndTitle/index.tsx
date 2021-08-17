import React, {useState, useEffect} from "react";
import { WithContainer } from "../DashBoard/withContainer";
import { animateValue } from "../../utils/utils";

export const NumberAndTitle = (props: any) => {
  const { data, textStyle = {}, textAlign='left', surfix = '元' , isThousands = false} = props;
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      animateValue(current, data || 0, 500, (curr) => {
        setCurrent(curr)
      })
    }, 1000);
  }, [data]);

  return (
    <div
    style={{...textStyle, textAlign}}
  >
    {/* {data.value.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} */}
    {isThousands?String(current).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"):current}{surfix}
  </div>
  );
};

export default WithContainer(NumberAndTitle);
