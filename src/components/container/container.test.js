import React from "react";
import { shallow } from "enzyme";
import { Container } from "./container";

it("renders without crashing", () => {
  shallow(<Container />);
});
