import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemUnsourced from '../components-info/OrderListItemUnsourced';

describe(`Rendering OrderListItemSourced`, () => {

    test('should render OrderListItemSourced with item UNSOURCED', function () {
        let itemX = {
            item: "UNSOURCED"
        }
        let tree = renderer.create(<OrderListItemUnsourced item={itemX} t={key => key}></OrderListItemUnsourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})