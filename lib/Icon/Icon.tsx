import React from "react";
import "./importIcons";
import "./icon.scss";

interface IconProps {
  name: String;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
