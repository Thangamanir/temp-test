import React from "react";
import Person from "./Person";

describe("The Person component", () => {
  it("Testing Person Component", () => {
    let component = Person();
    expect(typeof component).toEqual("object");
    //expect(component).toEqual(<h3>Hello World!</h3>);
  });
});
