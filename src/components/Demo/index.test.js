import {mount} from "enzyme"
import React from "react"
import Demo from "./index"
import * as variables from "../../variables.js"

const DemoFixture = (
  <Demo component={<div />} html="<div />" color={variables.mainColor} />
)

describe("Demo", () => {
  it("renders", () => {
    mount(DemoFixture)
  })
})
