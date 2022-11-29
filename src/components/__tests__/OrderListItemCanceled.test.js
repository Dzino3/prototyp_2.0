import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemCanceled from '../components-info/OrderListItemCanceled';

describe(`Rendering OrderListItemCanceled`, () => {

    test('should render OrderListItemCanceled with item CANCELED', function () {
        let itemX = {
            item: "CANCELED"
        }
        let tree = renderer.create(<OrderListItemCanceled item={itemX}></OrderListItemCanceled>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render OrderListItemCanceled with no item', function () {
        let itemX = {}
        let tree = renderer.create(<OrderListItemCanceled item={itemX}></OrderListItemCanceled>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})