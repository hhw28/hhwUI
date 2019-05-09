import React from "react";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Main: React.FunctionComponent<Props> = props => {
  return <div className={sc("main")}>{props.children}</div>;
};

export default Main;
