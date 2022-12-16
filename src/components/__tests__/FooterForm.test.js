import FooterForm from '../FooterForm';
import React from "react";
import renderer from 'react-test-renderer';


describe(`Rendering FooterForm`, () => {

    test('should render FooterForm', function () {
        let tree = renderer.create(<FooterForm t={key => key}/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})