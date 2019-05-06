import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setX(!x);
        }}
      >
        click
      </button>
      <Dialog visible={x}>
        <div>11</div>
      </Dialog>
    </div>
  );
};

export default DialogExample;
