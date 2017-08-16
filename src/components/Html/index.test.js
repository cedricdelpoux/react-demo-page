import {mount} from "enzyme"
import React from "react"
import Html from "./index"
import * as variables from "../../variables.js"

const HtmlFixture = <Html html="<div/>" color={variables.mainColor} />

describe("Html", () => {
  it("renders", () => {
    mount(HtmlFixture)
  })
})
