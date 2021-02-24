import VirtualKeyboard from "./VirtualKeyboard.js";

const virtualKeyboard = new VirtualKeyboard();

describe("fooTestSuite", () => {
  test("test1", () => {
    expect(virtualKeyboard.sum(1, 2)).toBe(3);
  });

  test("test2", () => {
    expect(virtualKeyboard.sayHi()).toBe("hi");
  });
});
