const Payment = ({ bookingProp }) => {
    const { child, adult, senior } = bookingProp;
    console.log(bookingProp);
    return (
        <h3> Payment for {child} children, {adult} adults and {senior} seniors! </h3>
    )
}

export default Payment;