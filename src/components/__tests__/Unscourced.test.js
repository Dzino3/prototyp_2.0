import React from "react";
import renderer from 'react-test-renderer';
import Unsourced from '../components-info/Unsourced';

describe(`Rendering Unsourced`, () => {

    test('should render Unsourced with UnsourcedInfo unsourced', function () {
        let unsourcedInfoX = {
            Unsourced
        }
        let tree = renderer.create(<Unsourced unsourcedInfo={unsourcedInfoX}></Unsourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render OrderListItemSourced with no unsourcedInfo', function () {
        let unsourcedInfoX = {}
    
        let tree = renderer.create(<Unsourced unsourcedInfo={unsourcedInfoX}></Unsourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

})