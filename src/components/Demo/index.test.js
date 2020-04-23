import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import * as variables from "../../variables.js";
import Demo from "./index";


configure({ adapter: new Adapter() });

const DemoFixture = (
  <Demo component={<div />} html="<div />" color={variables.mainColor} />
)

describe("Demo", () => {
  it("renders", () => {
    mount(DemoFixture)
  })
})
