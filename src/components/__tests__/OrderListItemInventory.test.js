import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemInventory from '../components-info/OrderListItemInventory';

describe(`Rendering OrderListItemInventory`, () => {

    test('should render OrderListItemInventory with item INVENTORY', function () {
        let itemX = {
            item: "INVENTORY"
        }
        let tree = renderer.create(<OrderListItemInventory item={itemX}></OrderListItemInventory>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render OrderListItemInventory with no item', function () {
        let itemX = {}
        let tree = renderer.create(<OrderListItemInventory item={itemX}></OrderListItemInventory>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})