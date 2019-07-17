import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
};

export default ButtonExample;
