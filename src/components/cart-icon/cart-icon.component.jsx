import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShopingIcon} from '../../assets/shoping-bag.svg';
import { connect } from 'react-redux';
import { toggleActionHidden } from '../../redux/cart/cart.actions';



const CartIcon = ({toggleActionHidden}) => (
    
    <div className="cart-icon" onClick={toggleActionHidden}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count" >0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleActionHidden:() => dispatch(toggleActionHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);