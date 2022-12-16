import React from "react";
import renderer from "react-test-renderer";
import OrderListItem from "../components-info/OrderListItem";

import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))
describe(`Rendering OrderListItem`, () => {

    const setState = jest.fn()

    beforeEach(() => {
      useStateMock.mockImplementation(init => [init, setState])
    })

    const item = {
        PROCESS_STATUS: "Shipped"
    }

  test("should render OrderListItem", function () {
    let tree = renderer.create(<OrderListItem item={item} t={key => key}/>);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('orderListItem state', () => {
      
    let tree = renderer.create(
      <OrderListItem item={item} t={key => key}/>
    );
    expect(setState).toHaveBeenCalledTimes(0)
    expect(tree).toBeTruthy()
   
  })
});
