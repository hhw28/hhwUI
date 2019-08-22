import React from "react";
import Demo from "../../demo";
import InputExample from "./input.example";

const InputDemo: React.FunctionComponent = () => {
  return (
    <Demo code={require("!!raw-loader!./Input.example.tsx").default}>
      <InputExample />
    </Demo>
  );
};

export default InputDemo;
