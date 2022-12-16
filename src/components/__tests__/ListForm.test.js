import React from "react";
import renderer from 'react-test-renderer';
import ListForm from "../ListForm";

describe(`Rendering ListForm`, () => {

    test.skip('should render ListForm with user Hallo42', function () {
        let userX = {
            dealer: "Hallo42"
        };
        let tree = renderer.create(
            <ListForm user={userX} t={key => key}></ListForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test.skip('should render ListForm with empty user', function () {
        let userX = {};
        let tree = renderer.create(
            <ListForm user={userX} t={key => key}></ListForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})