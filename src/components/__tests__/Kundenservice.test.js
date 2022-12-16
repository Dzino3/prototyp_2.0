import Kundenservice from '../Kundenservice';
import React from "react";
import renderer from 'react-test-renderer';


describe(`Rendering Kundenservice`, () => {

    test('should render Kundenservice', function () {
        let tree = renderer.create(<Kundenservice t={key => key}/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})