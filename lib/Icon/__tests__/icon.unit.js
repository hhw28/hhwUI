import * as renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";

describe("Icon", () => {
  it("render success", () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
