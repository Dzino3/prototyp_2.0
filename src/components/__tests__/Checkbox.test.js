import React from "react";
import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

import { useState as useStateMock } from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe(`Rendering Checkbox `, () => {
    const setState = jest.fn()

    beforeEach(() => {
      useStateMock.mockImplementation(init => [init, setState])
    })

    test('should render Checkbox', function () {
        let labelX = "Hallo42";
        let checkedX = "true";

        let tree = renderer.create(<Checkbox label={labelX} checked={checkedX}/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('checkbox state', () => {
      
      let tree = renderer.create(
        <Checkbox />
      )
      expect(setState).toHaveBeenCalledTimes(0)
      expect(tree).toBeTruthy()
     
    })
})