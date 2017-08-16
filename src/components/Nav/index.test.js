import {mount, shallow} from "enzyme"
import React from "react"
import {BrowserRouter} from "react-router-dom"
import Nav from "./index"
import * as variables from "../../variables.js"

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
