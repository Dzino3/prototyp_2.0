import React from "react";
import renderer from 'react-test-renderer';
import OrderForm from "../OrderForm.js";

describe(`OrderForm Rendering`, () => {

    it('should render OrderForm with user Hallo42', function () {
        let userX = {
            dealer: "Hallo42"
        };
        let tree = renderer.create(
            <OrderForm user={userX}></OrderForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render OrderForm with empty user', function () {
        let userX = {}
        let tree = renderer.create(
            <OrderForm user={userX}></OrderForm>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})