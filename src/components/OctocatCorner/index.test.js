import {mount} from "enzyme"
import React from "react"
import OctovatCorner from "./index"
import * as variables from "../../variables.js"

const OctovatCornerFixture = <OctovatCorner color={variables.mainColor} />

describe("OctovatCorner", () => {
  it("renders", () => {
    mount(OctovatCornerFixture)
  })
})
