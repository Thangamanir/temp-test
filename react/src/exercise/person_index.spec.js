import React from "react";
import Person from "./Person";

describe("The Welcome component", () => {
  it("message should be Hello World!", () => {
    let component = Person();
    expect(typeof component).toEqual("object");
    expect(component.length).toBeGreaterThan(0);
  });
});
