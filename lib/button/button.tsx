import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";
import { scopedClassMaker } from "../helpers/classes";
import Icon from '../icon/icon';
const sc = scopedClassMaker("hhw-button");

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal' | any,
  icon?: string
}

const Button: React.FunctionComponent<Props> = props => {
  const { className, children, level, icon, ...rest } = props

  return (
    <button
      className={sc({
        '': true,
        icon: icon ? true : false,
        [level]: true,
      }, {
          extra: [className].join(" ")
        })}
      {...rest}
    >
      {icon ? <Icon name={icon} /> : ''}
      {children}
    </button >
  );
};

Button.defaultProps = {
  level: 'normal'
}

export default Button;