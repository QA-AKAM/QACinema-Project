import { useEffect, useRef } from "react";

const PayPal = ({ totalProp, setPaidProp, setPaymentProp }) => {

    const total = totalProp;

    const setPaid = setPaidProp;

    const setPayment = setPaymentProp;

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'Movie tickets',
                            amount: {
                                currency_code: 'GBP',
                                value: total
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                setPaid(true);
                setPayment('paid');
            },
            onError: (err) => {
                console.log(err);
                console.log(total);
            }
        }).render(paypal.current)
    }, [])

    return (
        <div ref={paypal}> </div>
    )
}

export default PayPal;