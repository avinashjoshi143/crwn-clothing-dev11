import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    
    const priceForStripe = price * 100;
    const key = 'pk_test_51J9O4LSIKarH4JN42v4RXkU3UY5wmS5BhoUzM8RQEq9PCmXFfDPw3WImIrxCtwsgvaxCWFGwZChIaenJuHRfs3X1006pvI0Rlw';

    const onToken = token => {
        console.log(token)
        alert("payment successfull");
    }
   return (
        <StripeCheckout 
        label='Pay Now'
        name='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        stripeKey = {key}
        token = {onToken}
        />
    );
};

export default StripeCheckoutButton;