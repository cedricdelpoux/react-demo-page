import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import pkg from "../../../package.json";
import * as variables from "../../variables.js";
import Footer from "./index";


configure({ adapter: new Adapter() });


const FooterFixture = <Footer author={pkg.author} color={variables.mainColor} />

describe("Footer", () => {
  it("renders", () => {
    mount(FooterFixture)
  })
})
