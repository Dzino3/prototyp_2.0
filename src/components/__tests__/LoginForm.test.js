import LoginForm from '../LoginForm';
import React from "react";
import renderer from 'react-test-renderer';
import {LoginSucceeds} from '../../../__mocks__/loginSucceeds.js'
import {LoginFails} from '../../../__mocks__/loginFails.js'

import {render, screen} from '@testing-library/react'

// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({adapter: new Adapter()});


describe(`Rendering LoginForm`, () => {

    it(`should render LoginForm component when login succeeded`, function () {
        const tree = renderer
            .create(
                <LoginForm Login={LoginSucceeds} t={key => key}></LoginForm>
            );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it(`should render LoginForm component when login failed`, function () {
        const tree = renderer
            .create(
                <LoginForm Login={LoginFails} t={key => key}></LoginForm>
            );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});






// describe(`input field`, () => {

//     test.skip('on initial render, the text imput field for Account number should be enanbled', function () {
//         render(<LoginForm Login={{}}/>)

//         expect(screen.findByLabelText('Account number:')).toBeEnabled();
//     })

//     it.skip ('CheckboxWithLabel changes the text after click', () => {
//         // Render a checkbox with label in the document
//         const loginForm = shallow(<LoginForm />);
      
//         // expect(loginForm.text()).toBe('Off');
      
//         loginForm.contains('abc');
      
//         // expect(loginForm.text()).toBe('On');
//       });
// })