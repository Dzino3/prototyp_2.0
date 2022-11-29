import React from "react";
import renderer from 'react-test-renderer';
import AvailabilityForm from "../AvailabilityForm.js";

describe(`Rendering AvailabilityForm`, () => {

    it('should render AvailabilityForm with user Hallo42', function () {
        let userX = {
            dealer: "Hallo42"
        };
        let tree = renderer.create(
            <AvailabilityForm user={userX}></AvailabilityForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render AvailabilityForm with empty', function () {
        let userX = {}
        let tree = renderer.create(
            <AvailabilityForm user={userX}></AvailabilityForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})