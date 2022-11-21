import React from "react";
import renderer from 'react-test-renderer';
import AvailabilityForm from "../AvailabilityForm.js";

describe(`AvailabilityForm Rendering`, () => {

    it('should render AvailabilityForm with Availability', function () {
        let userX = {
            dealer: "Hallo42"
        };
        let tree = renderer.create(
            <AvailabilityForm user={userX}></AvailabilityForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render AvailabilityForm with no Availability', function () {
        let userX = {}
        let tree = renderer.create(
            <AvailabilityForm user={userX}></AvailabilityForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})