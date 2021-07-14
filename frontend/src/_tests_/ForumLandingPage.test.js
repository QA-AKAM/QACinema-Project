import React from 'react';
import ForumLandingPage from '../Components/Forum/ForumLandingPage';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<ForumLandingPage />).toJSON();
    expect(tree).toMatchSnapshot();

})