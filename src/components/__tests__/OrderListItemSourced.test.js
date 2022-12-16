import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemSourced from '../components-info/OrderListItemSourced';

describe(`Rendering OrderListItemSourced`, () => {

    test('should render OrderListItemSourced with item SOURCED', function () {
        let itemX = {
            FDD: "26.09.2022"
        };
        let tree = renderer.create(<OrderListItemSourced item={itemX} t={key => key}></OrderListItemSourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})