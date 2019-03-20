import React from "react";
import Person from "./Person";

describe("The Dynamic component", () => {
  it("message should be your name!", () => {
    let component = Person();
    expect(typeof component).toEqual("object");
    //expect(component.length).toBeGreaterThan(0);
  });
});
