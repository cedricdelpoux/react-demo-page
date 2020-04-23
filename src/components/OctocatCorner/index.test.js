import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import * as variables from "../../variables.js";
import OctovatCorner from "./index";

configure({ adapter: new Adapter() });

const OctovatCornerFixture = <OctovatCorner color={variables.mainColor} />

describe("OctovatCorner", () => {
  it("renders", () => {
    mount(OctovatCornerFixture)
  })
})
