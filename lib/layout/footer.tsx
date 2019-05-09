import React from "react";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = props => {
  return <div className={sc("footer")}>{props.children}</div>;
};

export default Footer;
