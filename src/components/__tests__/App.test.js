import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";


describe(`Rendering App`, () => {
  test("should render App", function () {
    let tree = renderer.create(<App />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
