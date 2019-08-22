import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-button");

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal' | any
}

const Button: React.FunctionComponent<Props> = props => {
  const { className, children, level, ...rest } = props
  return (
    <button
      className={sc({
        '': true,
        [level]: true
      }, {
          extra: [className].join(" ")
        })}
      {...rest}
    >
      {children}
    </button >
  );
};

Button.defaultProps = {
  level: 'normal'
}

export default Button;
