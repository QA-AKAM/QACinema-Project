import React from 'react';
import Member from '../Components/Information/About/Member';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { create } from 'react-test-renderer';

describe('Booking Tickets testing with props', () => {

    //Variables for props
    const memberData = {
        name: 'Kevin',
        role: 'Product Owner',
        projectMain: "Frontend, Jira, Github, Routing",
        projectSecondary: "Styling, Documentation",
        github: "https://github.com/KevinD-QA",
        linkedin: "https://www.linkedin.com/in/kevin-kcdoan/",
        email: "Kdoan@qa.com",
        telephone: "+447542962985"
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<Member member={memberData} />)
        testComponent = TestInstance.root;
    })

    // it(`Should render a member with the specified name`, () => {

    //     //Arrange + Act
    //     //Create h3 variable, it is euqal to the first h3 in component
    //     const memberName = testComponent.getByLabelText('#memberName');

    //     //Assert
    //     expect(memberName.value).toEqual([memberData.name]);
    // });

    // test("It matches the snapshot", () => {
    //     const tree = renderer.create(<Member />).toJSON();
    //     expect(tree).toMatchSnapshot();

    // });
    test('should show login form', () => {
        render(<Member />)
        const input = screen.getByLabelText('memberName')
        expect(input.value).toEqual([memberData.name]);
    });
})