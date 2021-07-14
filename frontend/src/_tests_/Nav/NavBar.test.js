import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

describe(`testing the navigation`, () => {

    let movieArr = [];
    let creator;
    let testComponent;

    test("It matches the snapshot", () => {
        const tree = renderer.create(<Nav />).toJSON();
        expect(tree).toMatchSnapshot();

    })

    it(`tests the search function`, () => {
        const realUseState = React.useState

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState(true))
            .mockImplementationOnce(() => realUseState("black"))
            .mockImplementationOnce(() => realUseState(movieArr))
        creator = create(<BrowserRouter><Nav /></BrowserRouter >)
        testComponent = creator.root
    })

})

