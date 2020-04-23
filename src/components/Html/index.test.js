import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import * as variables from "../../variables.js";
import Html from "./index";


configure({ adapter: new Adapter() });

const HtmlFixture = <Html html="<div/>" color={variables.mainColor} />

describe("Html", () => {
  it("renders", () => {
    mount(HtmlFixture)
  })
})
