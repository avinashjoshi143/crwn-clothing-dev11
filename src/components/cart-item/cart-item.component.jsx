import React from 'react';

import { CartItemContainer,
    ItemDetailsContainer,
    ItemImage,
    NameSpan,
    PriceSpan} from './cart-item.styles';

const CartItem = ({item: {imageUrl,price,name,quantity}}) => (
    <CartItemContainer className="cart-item">
        <ItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer className="item-details">
            <NameSpan className="name">{name}</NameSpan>
            <PriceSpan>{quantity} X {price}$</PriceSpan>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;