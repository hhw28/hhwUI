import React, { InputHTMLAttributes } from "react";
import "./input.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-input");

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <input
      className={sc("", {
        extra: [className].join(" ")
      })}
      {...rest}
    />
  );
};

export default Input;
