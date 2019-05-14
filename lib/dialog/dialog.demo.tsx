import React from "react";
import Demo from "../../demo";
import DialogExample from "./dialog.example";

const DialogDemo: React.FunctionComponent = () => {
  return (
    <Demo code={require("!!raw-loader!./dialog.example.tsx").default}>
      <DialogExample />
    </Demo>
  );
};

export default DialogDemo;
