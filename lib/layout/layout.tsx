import React, { ReactElement } from "react";
import Aside from "./aside";
import "./layout.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  const hasAside =
    children.length &&
    children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div
      className={sc("", {
        extra: [className, hasAside && "hasAside"].join(" ")
      })}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Main } from "./main";
export { default as Footer } from "./footer";
export { default as Aside } from "./aside";
