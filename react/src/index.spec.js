import React from "react";
import Welcome from "./welcome";

describe("The Welcome component", () => {
  it("message should be Hello World!", () => {
    let component = Welcome();
    expect(typeof component).toEqual("object");
    expect(component).toEqual(<h3>Hello World!</h3>);
  });
});
