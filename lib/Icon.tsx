import React from "react";
import "./icons/wechat.svg";
import "./icons/alipay.svg";

interface IconProps {
  name: String;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
