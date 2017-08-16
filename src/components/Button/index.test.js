import {mount} from "enzyme"
import React from "react"
import Button from "./index"

const ButtonFixture = (
  <Button>
    {"Label"}
  </Button>
)

describe("Button", () => {
  it("renders", () => {
    mount(ButtonFixture)
  })
})
