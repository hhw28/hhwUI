import React, { useState, Fragment } from "react";
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  return (
    <Fragment>
      <div>
        <button onClick={() => setX(!x)}>click 1</button>
        <Dialog
          visible={x}
          buttons={[
            <button onClick={() => setX(!x)}>1</button>,
            <button onClick={() => setX(!x)}>2</button>
          ]}
          onClose={() => setX(!x)}
        >
          <div>11</div>
        </Dialog>
      </div>

      <div>
        <button onClick={() => setY(!y)}>click 2 点击遮罩会关闭</button>
        <Dialog
          visible={y}
          buttons={[
            <button onClick={() => setY(!y)}>ok</button>,
            <button onClick={() => setY(!y)}>cancel</button>
          ]}
          onClose={() => setY(!y)}
          closeOnClickMask={true}
        >
          <div>自定义内容</div>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default DialogExample;
