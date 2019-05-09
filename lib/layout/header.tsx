import React from "react";
import { scopedClassMaker } from "../helpers/classes";
import "./layout.scss";

const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = props => {
  return <div className={sc("header")}>{props.children}</div>;
};

export default Header;
