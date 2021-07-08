import { useEffect, useRef } from "react";

const PayPal = ({ totalProp, setPaidProp }) => {

    const total = parseFloat(totalProp);

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
                setPaidProp(true);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])

    return (
        <div ref={paypal}> </div>
    )
}

export default PayPal;