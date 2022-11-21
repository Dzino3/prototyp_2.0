import Kundenservice from '../Kundenservice';
import React from "react";
import renderer from 'react-test-renderer';


describe(`Kundenservice Rendering`, () => {

    test('should render Kundenservice', function () {
        let tree = renderer.create(<Kundenservice/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})