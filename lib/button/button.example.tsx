import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button level="primary">Primary</Button>
      <Button>Default</Button>
      <Button level="dashed">Dashed</Button>
      <Button level="danger">Danger</Button>
      <Button level="link">Link</Button>
      <Button icon="search">
        search
      </Button>
      <Button level="primary" icon="search"></Button>
      <Button icon="search"></Button>
    </div>
  );
};

export default ButtonExample;
