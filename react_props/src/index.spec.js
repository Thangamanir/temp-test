import React from "react";
//import { shallow } from "enzyme";
import Person from "./Person";
describe("The Person component", () => {
  it("Testing Person Component", () => {
    let component = Person();
    expect(component).toEqual(<h3>Hello World!</h3>);
    //console.print(component.props);
    // expect(text_entry).not.toBeNull();
    //expect(component).toEqual(<h3>Hello World!</h3>);
    //const wrapper = shallow(<App />);
    //const text_entry = wrapper.find("Person").text();
  });
});
