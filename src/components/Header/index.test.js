import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import pkg from "../../../package.json";
import * as variables from "../../variables.js";
import Header from "./index";


configure({ adapter: new Adapter() });


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
