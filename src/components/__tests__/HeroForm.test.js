import React from 'react';
import renderer from 'react-test-renderer';
import HeroForm from "../HeroForm.js";

describe(`Rendering HeroForm`, () => {

    test('should render HeroForm with user Hallo42', function () {
        let userX = {
            dealer: "Hallo42"
        };
        let tree = renderer.create(
            <HeroForm user={userX}></HeroForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render HeroForm with empty user', function () {
        let userX = {};
        let tree = renderer.create(
            <HeroForm user={userX}></HeroForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})
