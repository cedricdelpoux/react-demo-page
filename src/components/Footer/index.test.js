import {mount} from "enzyme"
import React from "react"
import Footer from "./index"
import * as variables from "../../variables.js"

import pkg from "../../../package.json"

const FooterFixture = <Footer author={pkg.author} color={variables.mainColor} />

describe("Footer", () => {
  it("renders", () => {
    mount(FooterFixture)
  })
})
