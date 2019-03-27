import React from "react";
import {create} from "react-test-renderer";
import Person from "./Person";

describe("The Person component", () => {
  it("Testing Person Component", () => {
    const component = create(<Person/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
