import React from 'react';
import './checkoutpage.styles.scss';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import {connect} from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout.component';


const CheckoutPage = ({cartItems,totalPrice}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => 
            <CheckoutItem id={cartItem.id} cartItem={cartItem} />
            )}
        <div className="total">
            TOTAL : {totalPrice}$
        </div>
        <div className="test-warning">
            please use the test credit card for payments
            <br />
            4242 4242 4242 4242 - Exp: 08/21 - cvv: 812
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);