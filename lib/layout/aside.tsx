import React from "react";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = props => {
  return <div className={sc("aside")}>{props.children}</div>;
};

export default Aside;
