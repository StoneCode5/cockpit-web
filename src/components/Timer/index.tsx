import React, { useEffect, useState } from "react";
import { WithContainer } from "../DashBoard/withContainer";
import moment from 'moment'

const DEFAULTSTYLE = {
  fontSize: 16,
  color: "#2e93ff",
  fontWeight: "normal",
};

const Timer: React.FC = (props: any) => {
  const {
    duration = 1000,
    format = "YYYY-MM-DD HH:mm:ss",
    textStyle = DEFAULTSTYLE,
  } = props;
  const [timerText, setTimerText] = useState(moment().format(format));

  useEffect(() => {
    setTimeout(() => {
      setTimerText(moment().format(format));
    }, duration);
  }, [duration, format, timerText]);

  return <div style={textStyle}>{timerText}</div>;
};

export default WithContainer(Timer);
