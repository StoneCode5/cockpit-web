import React from "react";
import ReactDOM from "react-dom";
import { Loading as DVLoading } from "@jiaminghi/data-view-react";

export const Loading = () => {
  const [container] = React.useState(() => {
    const el = document.createElement("div");
    return el;
  });

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#021237",
        color: '#ffffff'
      }}
    >
      <DVLoading>Loading...</DVLoading>
    </div>,
    container
  );
};
export default Loading;
