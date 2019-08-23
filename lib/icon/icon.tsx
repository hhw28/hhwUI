import React from "react";
import "./importIcons";
import "./icon.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("hhw-icon");

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...rest } = props
  return (
    <svg
      className={sc('', {
        extra: [className].join(' ')
      })}
      {...rest}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
