import { useContext, useReducer, useEffect } from "react";
import { CartDataContext } from "./CreateContext";
import reducer from '../Reducer/CartReducer'

const CartContext = (props) => {
const initialState={
    cart:[],
    NoOfItem:1,
    price:0,
    totalprice:0
}
    const [state, dispatch] = useReducer(reducer, initialState);

    const addtocart=(id,stock,NoOfItem,singleitem)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,stock,NoOfItem,singleitem}})
    }
    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    }

return (
    <CartDataContext.Provider value={{...state,addtocart,removeItem}} >
        {props.children}
    </CartDataContext.Provider>
)
}
export default CartContext;