import NavbarForm from '../NavbarForm';
import React from "react";
import renderer from 'react-test-renderer';

// import {LogoutSucceeds} from "../../../__mocks__/logoutSucceeds.js";


// describe(`NavbarForm Rendering`, () => {

//     test('should render NavbarForm', function () {
//         let tree = renderer.create(
//         <NavbarForm Logout={LogoutSucceeds}></NavbarForm>);

//         expect(tree.toJSON()).toMatchSnapshot();
//     });
// })

describe(`Rendering NavbarForm`, () => {

    test('should render NavbarForm', function () {
        let tree = renderer.create(
        <NavbarForm></NavbarForm>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})