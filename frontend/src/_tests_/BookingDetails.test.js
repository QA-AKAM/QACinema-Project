import BookingDetails from "../Components/TicketBooking/BookingDetails";
import { create } from 'react-test-renderer';
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { act } from "react-dom/test-utils";

describe('Booking Tickets testing with props', () => {

    //Variables for props
    const bookingData = {
        name: 'test_name',
        child: 'test_child',
        adult: 'test_adult',
        senior: 'test_senior',
        selectedDay: ['test_selectedDay'],
        selectedTime: ['test_selectedTime'],
        selectedMovie: ['test_selectedMovie'],
        paymentID: 'test_paymentID'
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<BookingDetails{...bookingData} />)
        testComponent = TestInstance.root;
    })


    it(`Should render a h3 which Booking Details`, () => {

        //Arrange + Act
        //Create h3 variable, it is euqal to the first h3 in component
        const h3 = testComponent.findByType('h3');

        //Assert
        expect(h3.children[0]).toEqual('Booking Details');
    });
    // it('Should render alert when incorrect data entered', () => {
    //     //Arrange + Act
    //     const button = testComponent.findByType('button');
    //     act(() => {
    //         button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    //     });
    //     const alert = testComponent.findByType('Alert');
    //     //Assert
    //     expect(alert).toBe();
    // })
})