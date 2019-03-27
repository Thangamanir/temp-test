import React from "react";
import Enzyme ,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import Person from "./Person";
Enzyme.configure({ adapter: new Adapter() });
describe("The Person component", () => {
  it("Testing Person Component", () => {
    const wrapper = shallow(<Person name="Test" />);
    const text_entry = wrapper.text();
    expect(text_entry).toEqual("Hello Test");
  });
});
