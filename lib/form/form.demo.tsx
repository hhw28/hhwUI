import React from "react";
import Demo from "../../demo";
import FormExample from "./form.example";

const FormDemo: React.FunctionComponent = () => {
  return (
    <Demo code={require("!!raw-loader!./form.example.tsx").default}>
      <FormExample />
    </Demo>
  );
};

export default FormDemo;
