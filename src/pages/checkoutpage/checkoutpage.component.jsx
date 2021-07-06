import React from 'react';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import {connect} from 'react-redux';

import StripeCheckoutButton from "../../components/stripe-checkout/stripe-checkout.component";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalPriceContainer,
    TestWarningContainer} from './checkoutpage.styles';

const CheckoutPage = ({cartItems,totalPrice}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {cartItems.map(cartItem => 
            <CheckoutItem id={cartItem.id} cartItem={cartItem} />
            )}
        <TotalPriceContainer className="total">
            TOTAL : {totalPrice}$
        </TotalPriceContainer>
        <TestWarningContainer className="test-warning">
            please use the test credit card for payments
            <br />
            4242 4242 4242 4242 - Exp: 08/21 - cvv: 812
        </TestWarningContainer>
        <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);