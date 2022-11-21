import App from '../../App';
import React from "react";
import renderer from 'react-test-renderer';

describe('something truthy and falsy', () => {
    test.skip('true to be true', () => {
      expect(true).toBe(true);
    });
  
    test.skip('false to be false', () => {
      expect(false).toBe(false);
    });
  });

  describe(`App Rendering`, () => {

    test('should render App', function () {
        let tree = renderer.create(<App/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})