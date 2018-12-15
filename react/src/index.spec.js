let greetings = require("./index");
import React from "react";

describe("The Welcome component", () => {
  it("message should be Hello", () => {
    let component = greetings.Welcome();
    expect(typeof component).toEqual("object");
    expect(component).toEqual(<h3>Hello</h3>);
  });
});
