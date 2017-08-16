import {mount, shallow} from "enzyme"
import React from "react"
import NavToggle from "./index"

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
