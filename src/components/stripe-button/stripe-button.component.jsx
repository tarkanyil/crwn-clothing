import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IC79KLAmfee6bi1WxFfP7ETtmxONDvIDd1aGwmcEaznNmUbc22JV9xkTZJSMmlwE9H0JHcxVT5qHpBmitY4ZD5Q008p7w6dEZ";

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;