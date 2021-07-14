import Payment from "../Components/TicketBooking/Payment";
import { create } from 'react-test-renderer';

describe('Payment testing with props', () => {

    //Variables for props
    const paymentData = {
        name: 'John',
        child: 1,
        adult: 2,
        senior: 0,
        selectedDay: 'test_selectedDay',
        selectedTime: 'test_selectedTime',
        selectedMovie: 'test_selectedMovie',
    };

    const paymentType = {
        getPayment: 'test_payment'
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<Payment bookingProp={paymentData} getPaymentProp={paymentType} />)
        testComponent = TestInstance.root;
    });

    it('Should render the h3 with number of tickets.', () => {
        //Arrange + Act
        //Create h3 variable, it is euqal to the first h3 in component
        const h3 = testComponent.findAllByType('h3')[0];
        //Assert
        //Expecting to receive a string to equal Ticket no.
        expect(h3.children[1]).toEqual((paymentData.child + paymentData.adult + paymentData.senior).toString());
    });

    it('Should render the h3 with number of tickets.', () => {
        //Arrange + Act
        //Create h3 variable, it is euqal to the first h3 in component
        const h3 = testComponent.findAllByType('h3')[0];
        //Assert
        //Expecting to receive a string to equal Ticket no.
        expect(h3.children[1]).toEqual((paymentData.child + paymentData.adult + paymentData.senior).toString());
    });
})