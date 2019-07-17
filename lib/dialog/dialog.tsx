import React, { Fragment, ReactElement, ReactNode, ReactFragment } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";
import "../index.scss";
import Icon from "./../icon/icon";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-dialog");
interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  whiteMask?: boolean;
}

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const result = props.visible && (
    <Fragment>
      <div
        className={props.whiteMask ? sc("mask-white") : sc("mask")}
        onClick={onClickMask}
      />
      <div className={sc()}>
        <header className={sc("header")}>
          <div className={sc("title")}>标题</div>
          <div className={sc("close")} onClick={onClickClose}>
            <Icon name="close" />
          </div>
        </header>
        <main className={sc("main")}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc("footer")}>
            {props.buttons &&
              props.buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
          </footer>
        )}
      </div>
    </Fragment>
  );

  return ReactDOM.createPortal(result, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
  whiteMask: false
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>alert btn</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={() => onYes()}>yes</button>,
    <button onClick={() => onNo()}>no</button>
  ];
  const close = modal(content, buttons, no);
};

const modal = (
  content: ReactNode | ReactFragment,
  buttons?: Array<ReactElement>,
  afterClose?: Function
) => {
  const onClose = () => {
    // 当点击关闭按钮后，重新渲染component组件，将visible设置为false
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // 从DOM元素中移除已挂载的React组件，清除它的事件处理器和state
    ReactDOM.unmountComponentAtNode(div);
    // 移除div
    div.remove();
  };
  //新建一个组件
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      buttons={buttons}
      closeOnClickMask={true}
    >
      {content}
    </Dialog>
  );
  // 新建一个div
  const div = document.createElement("div");
  // 将div添加到body中
  document.body.append(div);
  // 将组件渲染到div中
  ReactDOM.render(component, div);
  return onClose;
};

export { alert, confirm, modal };

export default Dialog;
