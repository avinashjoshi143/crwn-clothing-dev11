import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleActionHidden } from '../../redux/cart/cart.actions';


const CartDropDown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    (<CartItem key={cartItem.id} item={cartItem}></CartItem>)
                )) :
                (<div className="empty-message">Your cart is empty</div>)
            }
        </div>
        <CustomButton onClick={()=> {
            dispatch(toggleActionHidden());
            history.push('/checkout')
            }}>
            GO TO CHECKOUT
            </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default  withRouter(connect(mapStateToProps)(CartDropDown));