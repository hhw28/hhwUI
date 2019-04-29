import classes from "../classes";

describe("classes", () => {
  it("接收 1个参数", () => {
    const result = classes("a");
    expect(result).toEqual("a");
  });
  it("接收 2个参数", () => {
    const result = classes("a", "b");
    expect(result).toEqual("a b");
  });
  it("接收undefined，结果不会出现undefined", () => {
    const result = classes("a", undefined);
    expect(result).toEqual("a");
  });
  it("接收各种奇怪值", () => {
    const result = classes("a", "中文", null, false);
    expect(result).toEqual("a 中文");
  });
  it("接收 0个参数", () => {
    const result = classes();
    expect(result).toEqual("");
  });
});
