import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemSourced from '../components-info/OrderListItemSourced';

describe(`Rendering OrderListItemSourced`, () => {

    test('should render OrderListItemSourced with item SOURCED', function () {
        let itemX = {
            item: "SOURCED"
        }
        let tree = renderer.create(<OrderListItemSourced item={itemX}></OrderListItemSourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})