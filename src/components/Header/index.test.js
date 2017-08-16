import {mount} from "enzyme"
import React from "react"
import Header from "./index"
import * as variables from "../../variables.js"

import pkg from "../../../package.json"

const HeaderFixture = (
  <Header
    title={pkg.name}
    buttons={[{label: "Github", url: pkg.homepage}]}
    color={variables.mainColor}
    octocat={{url: pkg.homepage}}
  />
)

describe("Header", () => {
  it("renders", () => {
    mount(HeaderFixture)
  })
})
