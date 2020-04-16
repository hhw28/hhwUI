import React from "react";
import Demo from "../../demo";
import ScrollExample from "./scroll.example";

const ScrollDemo: React.FunctionComponent = () => {
  return (
    <Demo code={require("!!raw-loader!./scroll.example.tsx").default}>
      <ScrollExample />
    </Demo>
  );
};

export default ScrollDemo;
