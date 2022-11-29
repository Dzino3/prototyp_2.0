import React from "react";
import renderer from 'react-test-renderer';
import Sourced from '../components-info/Sourced';

describe(`Rendering Sourced`, () => {

    test('should render Sourced with sourcedInfo ', function () {
        let sourcedInfoX = {
            Sourced
        }

        let tree = renderer.create(<Sourced sourcedInfo={sourcedInfoX}></Sourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('should render Sourced with empty sourcedInfo ', function () {
        let sourcedInfoX = {}

        let tree = renderer.create(<Sourced sourcedInfo={sourcedInfoX}></Sourced>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
})