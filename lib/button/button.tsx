import React from "react";
import "./button.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-button");

interface Props {
  type?: string;
}

const Button: React.FunctionComponent<Props> = props => {
  return (
    <div className={sc(`${props.type ? props.type : ""}`)}>
      <div>Button</div>
    </div>
  );
};

export default Button;
