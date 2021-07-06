import React from 'react';

import { connect } from 'react-redux';
import { toggleActionHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer,
    ShopingIcon,
    ItemCountSpan} from './cart-icon.styles';



const CartIcon = ({toggleActionHidden,quantity}) => (
    
    <CartIconContainer className="cart-icon" onClick={toggleActionHidden}>
        <ShopingIcon />
        <ItemCountSpan className="item-count" >{quantity}</ItemCountSpan>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleActionHidden:() => dispatch(toggleActionHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);