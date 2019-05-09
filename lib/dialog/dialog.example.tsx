import React, { useState, Fragment } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const openModal = () => {
    // modal return 出了onClose 方法
    const onClose = modal(
      <div>
        <p>hello modal</p>
        <button onClick={() => onClose()}>yes</button>
      </div>
    );
  };

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
        <button onClick={() => setZ(!z)}>遮罩不存在</button>
        <Dialog
          visible={z}
          buttons={[
            <button onClick={() => setZ(!z)}>ok</button>,
            <button onClick={() => setZ(!z)}>cancel</button>
          ]}
          onClose={() => setZ(!z)}
          whiteMask={true}
        >
          <div>遮罩不存在</div>
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

      <div>
        <button onClick={() => alert("alert")}>click 3 alert</button>
        <button
          onClick={() =>
            confirm(
              "confirm",
              () => {
                console.log("yes");
              },
              () => {
                console.log("no");
              }
            )
          }
        >
          click 4 confirm
        </button>
        <button onClick={openModal}>click 5 modal</button>
      </div>
    </Fragment>
  );
};

export default DialogExample;
