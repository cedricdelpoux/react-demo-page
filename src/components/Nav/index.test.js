import { configure, mount, shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import React from "react"
import { BrowserRouter } from "react-router-dom"
import * as variables from "../../variables.js"
import Nav from "./index"


configure({ adapter: new Adapter() });

const routes = [
  {
    path: "/",
    exact: true,
    html: "<div />",
    label: "Home",
  },
]

const NavFixture = (
  <BrowserRouter>
    <Nav routes={routes} color={variables.mainColor} />
  </BrowserRouter>
)

describe("Nav", () => {
  it("renders", () => {
    mount(NavFixture)
  })

  it("changes state when toggleNav is called", () => {
    const router = shallow(NavFixture)
    const nav = router.find(Nav).shallow()
    expect(nav.state().open).toBe(false)
    nav.instance().toggleNav()
    expect(nav.state().open).toBe(true)
  })
})
