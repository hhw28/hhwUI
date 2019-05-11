import classes, { scopedClassMaker } from "../classes";

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

describe("scopedClassMaker", () => {
  const sc = scopedClassMaker("hhw-layout");
  it("不接收任何参数", () => {
    expect(sc()).toEqual("hhw-layout");
  });
  it("接收空字符串", () => {
    expect(sc("")).toEqual("hhw-layout");
  });
  it("接收字符串", () => {
    expect(sc("x")).toEqual("hhw-layout-x");
  });
  it("接收含空格的字符串", () => {
    expect(sc("x y")).toEqual("hhw-layout-x y");
  });
  it("接收空字符串，及额外对象", () => {
    expect(sc("x y", { extra: "z" })).toEqual("hhw-layout-x y z");
  });
  it("接收对象", () => {
    expect(sc({ x: true, y: false })).toEqual("hhw-layout-x");
    expect(sc({ x: true, y: true })).toEqual("hhw-layout-x hhw-layout-y");
  });
  it("接收对象，及额外的对象", () => {
    expect(sc({ x: true, y: false }, { extra: "z" })).toEqual("hhw-layout-x z");
  });
});
