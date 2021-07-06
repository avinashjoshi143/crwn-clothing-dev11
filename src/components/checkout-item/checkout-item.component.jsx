import React from 'react';

import {connect} from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer,
    ImageContainer,
    ItemImage,
    NameSpan,
    QuantitySpan,
    ArrowContainer,
    QuantityValueSpan,
    PriceSpan,
    RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({cartItem,dispatch}) => {
    const {imageUrl,name,price,quantity} = cartItem; 
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <ItemImage src={imageUrl} alt="item"/>
        </ImageContainer>
        <NameSpan>{name}</NameSpan>
        <QuantitySpan>
        <ArrowContainer onClick={()=> {dispatch(removeItem(cartItem))}}>&#10094;</ArrowContainer>
           <QuantityValueSpan>{quantity}</QuantityValueSpan> 
        <ArrowContainer onClick={()=> {dispatch(addItem(cartItem))}}>&#10095;</ArrowContainer>
        </QuantitySpan>
        <PriceSpan>{price}</PriceSpan>
        <RemoveButtonContainer onClick={()=> {dispatch(clearItemFromCart(cartItem))}}>&#10006;</RemoveButtonContainer>
        
    </CheckoutItemContainer>
)};

export default connect()(CheckoutItem);