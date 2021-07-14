import ForumLandingPage from "../Components/Forum/ForumLandingPage";
import { create } from 'react-test-renderer';
import shallow from 'react-test-renderer/shallow'
import React from 'react';

describe(`Forum landing page testing`, () => {

    let testComponent;

    beforeEach(() => {
        const TestInstance = create(<ForumLandingPage />)
        testComponent = TestInstance.root;
    })

    it(`should render data is loading`, () => {
        const p = testComponent.findByType('p');
        expect(p.children[0]).toEqual('Data is loading');
    })

    it(`should render h1 forum`, () => {
        const realUseState = React.useState

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState([]))
            .mockImplementationOnce(() => realUseState(null))
            .mockImplementationOnce(() => realUseState(true))
        testComponent = create(<ForumLandingPage />).root

        const h1 = testComponent.findByType('h1');
        expect(h1.children[0]).toEqual(' Forum ');

        const h3 = testComponent.findByType('h3');
        expect(h3.children[0]).toEqual('Discuss about your movie experiences here!');
    })

})

