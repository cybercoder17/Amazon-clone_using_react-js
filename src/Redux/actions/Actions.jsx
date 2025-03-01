import { ADD_TO_CART,REMOVE_FROM_CART ,UPDATE_CART_QUANTITY,CLEAR_CART} from "../ActionsType";

export const addToCart =(item) =>({
    type:ADD_TO_CART,
    payload:item
    
    });
    
export const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index
    });


export const updatecartQuantity =(itemId,quantity) =>({
    type:UPDATE_CART_QUANTITY,
    payload:{itemId,quantity}
    
    });

export const clearCart =() =>({
    type:CLEAR_CART
    
    });