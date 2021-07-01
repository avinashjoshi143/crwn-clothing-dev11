import CartActionType from "./cart.types";

export const toggleActionHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload:item
});