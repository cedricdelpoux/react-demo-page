import {mount, shallow} from "enzyme"
import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Routes from "./index"
import * as variables from "../../variables.js"

const routes = [
  {
    path: "/",
    exact: true,
    html: "<div />",
    label: "Home",
  },
  {
    path: "/demo",
    demo: {
      component: <div />,
    },
    label: "Demo",
  },
  {
    path: "/component",
    component: <div />,
    label: "Component",
  },
  {
    path: "/noroute",
    label: "Component",
  },
]

const RoutesFixtures = <Routes routes={routes} color={variables.mainColor} />
const RouterFixture = (
  <BrowserRouter>
    {RoutesFixtures}
  </BrowserRouter>
)

describe("Routes", () => {
  it("renders", () => {
    mount(RouterFixture)
  })

  it("has three routes", () => {
    const router = shallow(RoutesFixtures)
    expect(router.find(Route)).toHaveLength(3)
  })

  it("has only three routes ", () => {
    const router = shallow(RoutesFixtures)
    expect(router.find(Route).get(routes.length - 1)).toBeUndefined()
  })

  it("has only Route children", () => {
    const router = shallow(RoutesFixtures)
    expect(
      router.find(Route).everyWhere(route => route.prop("render"))
    ).toBeTruthy()
  })

  it("has render prop of type Function", () => {
    const router = shallow(RoutesFixtures)
    expect(router.find(Route).first().prop("render")).toBeInstanceOf(Function)
  })

  it("has render prop callback", () => {
    const router = shallow(RoutesFixtures)
    expect(router.find(Route).first().prop("render")()).toBeDefined()
  })
})
