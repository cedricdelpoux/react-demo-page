import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import Button from "./index";

configure({ adapter: new Adapter() });

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
