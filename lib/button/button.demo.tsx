import React from "react";
import Demo from "../../demo";
import ButtonExample from "./button.example";

const ButtonDemo: React.FunctionComponent = () => {
  return (
    <Demo code={require("!!raw-loader!./button.example.tsx").default}>
      <ButtonExample />
    </Demo>
  );
};

export default ButtonDemo;
