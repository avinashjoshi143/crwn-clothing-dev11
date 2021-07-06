import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleActionHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer} from './cart-dropdown.styles';

const CartDropDown = ({cartItems,history,dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    (<CartItem key={cartItem.id} item={cartItem}></CartItem>)
                )) :
                (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
            }
        </CartItemsContainer>
        <CustomButton onClick={()=> {
            dispatch(toggleActionHidden());
            history.push('/checkout')
            }}>
            GO TO CHECKOUT
            </CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default  withRouter(connect(mapStateToProps)(CartDropDown));