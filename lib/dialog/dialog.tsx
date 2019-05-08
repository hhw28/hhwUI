import React, { Fragment, ReactElement, ReactNode, ReactFragment } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";
import "../index.scss";
import Icon from "./../icon/icon";
import { scopedClassMaker } from "../classes";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker("hhw-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask} />
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>标题</header>
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
  ) : null;

  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const alert = (content: string) => {
  //新建一个组件
  const component = (
    <Dialog
      visible={true}
      onClose={() => onClose()}
      buttons={[<button onClick={() => onClose()}>yes</button>]}
    >
      {content}
    </Dialog>
  );
  // 新建一个div
  const div = document.createElement("div");
  const onClose = () => {
    {
      // 当点击关闭按钮后，重新渲染component组件，将visible设置为false
      ReactDOM.render(React.cloneElement(component, { visible: false }), div);
      // 从DOM元素中移除已挂载的React组件，清除它的事件处理器和state
      ReactDOM.unmountComponentAtNode(div);
      // 移除div
      div.remove();
    }
  };
  // 将div添加到body中
  document.body.append(div);
  // 将组件渲染到div中
  ReactDOM.render(component, div);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={() => onNo()}
      buttons={[
        <button onClick={() => onYes()}>yes</button>,
        <button onClick={() => onNo()}>no</button>
      ]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};
const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} onClose={onClose}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

export { alert, confirm, modal };

export default Dialog;
