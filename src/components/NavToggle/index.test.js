import { configure, mount, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import NavToggle from "./index";


configure({ adapter: new Adapter() });

const onClick = jest.fn()
const NavToggleFixture = <NavToggle onClick={onClick} open />

describe("NavToggle", () => {
  it("renders", () => {
    mount(NavToggleFixture)
  })

  it("calls onClick when clicked", () => {
    const tab = shallow(NavToggleFixture)
    tab.simulate("click")
    expect(onClick).toHaveBeenCalled()
  })
})
