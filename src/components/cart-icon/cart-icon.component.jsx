import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon} from '../../assets/shoping-bag.svg';
import { connect } from 'react-redux';
import { toggleActionHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';



const CartIcon = ({toggleActionHidden,quantity}) => (
    
    <div className="cart-icon" onClick={toggleActionHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count" >{quantity}</span>
    </div>
);

const mapStateToProps = (state) => ({
    quantity: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleActionHidden:() => dispatch(toggleActionHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);