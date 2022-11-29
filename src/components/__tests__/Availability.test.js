import React from "react";
import renderer from 'react-test-renderer';
import Availability from '../components-info/Availability';

describe(`Rendering Availability`, () => {

    test('should render Availability with Pro, dukt42', function () {
        let produktInfo = {
            produktInfo: "Pro",
            PRODUKT: "dukt42"
        };
        let tree = renderer.create(
            <Availability produktInfo={produktInfo.PRODUKT}></Availability>
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
})