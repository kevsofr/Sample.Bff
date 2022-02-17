//import React from "react";
import Enzyme/*, { mount }*/ from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test("should render self", () => {
    // const wrapper = mount(<App />);

    // expect(wrapper.find("div.App").hasClass("App")).toBe(true);
});