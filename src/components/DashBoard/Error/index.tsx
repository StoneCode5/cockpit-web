import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Error = () => {
  const [container] = React.useState(() => {
    const el = document.createElement("div");
    return el;
  });
  const [countTime, setRestTime] = useState(10);

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  useEffect(() => {
    function count(second: number) {
      if (second === 0) {
        document.location.reload();
      } else {
        setRestTime(second - 1);
        second -= 1;
        setTimeout(() => {
          count(second);
        }, 1000);
      }
    }
    count(countTime);
  }, []);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#021237",
        color: "#ffffff",
        textAlign: 'center',
        lineHeight: '100vh'
      }}
    >
      {`服务器好像出了问题...${countTime}秒后自动刷新`}
    </div>,
    container
  );
};
export default Error;
