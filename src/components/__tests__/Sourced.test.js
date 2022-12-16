import React from "react";
import renderer from 'react-test-renderer';
import OrderListItemSourced from '../components-info/OrderListItemSourced';

describe(`Rendering OrderListItemSourced`, () => {
    let sourcedInfoX = {
        FDD: "26.09.2022"
    }

    test('should render OrderListItemSourced with sourcedInfo ', function () {

        let tree = renderer.create(<OrderListItemSourced item={sourcedInfoX} t={key => key}/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render Sourced with empty sourcedInfo ', function () {

        let tree = renderer.create(<OrderListItemSourced item={sourcedInfoX} t={key => key}/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})