import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon/Icon";

ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={() => console.log('1')} />
    <Icon
      name="alipay"
      className="icon"
      onTouchStart={() => console.log('start')}
      onTouchMove={() => console.log('move')}
      onTouchEnd={() => { console.log('end'); }}
    />
  </div>,
  document.getElementById("root")
);
