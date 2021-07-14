import React from 'react';
import Member from '../Components/Information/About/Member';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';

describe('Booking Tickets testing with props', () => {

    //Variables for props
    const memberData = {
        name: 'Kevin',
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<Member{...memberData} />)
        testComponent = TestInstance.root;
    })

    // it(`Should render a member with the specified name`, () => {

    //     //Arrange + Act
    //     //Create h3 variable, it is euqal to the first h3 in component
    //     const memberName = testComponent.querySelector('#memberName');

    //     //Assert
    //     expect(memberName.value).toEqual([memberData.name]);
    // });

    // test("It matches the snapshot", () => {
    //     const tree = renderer.create(<Member />).toJSON();
    //     expect(tree).toMatchSnapshot();

    // });
})