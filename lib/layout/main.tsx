import React from "react";
import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("hhw-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Main: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  return (
    <div className={sc("main", { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Main;
