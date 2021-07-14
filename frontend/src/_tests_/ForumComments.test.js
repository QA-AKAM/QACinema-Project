import React from 'react';
import ForumComments from '../Components/Forum/ForumComments';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<ForumComments />).toJSON();
    expect(tree).toMatchSnapshot();

})