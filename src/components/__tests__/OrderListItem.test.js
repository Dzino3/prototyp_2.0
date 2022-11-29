import React from "react";
import renderer from 'react-test-renderer';
import OrderListItem from '../components-info/OrderListItem';

describe(`Rendering OrderListItem`, () => {

    test.skip('should render OrderListItem', function () {




        
        let tree = renderer.create(<OrderListItem></OrderListItem>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})