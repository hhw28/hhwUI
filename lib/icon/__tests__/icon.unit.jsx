import * as renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";
import { mount } from "enzyme";

describe("Icon", () => {
  it("渲染 render UI success", () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("事件 onClick", () => {
    const fn = jest.fn();
    const fn1 = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
