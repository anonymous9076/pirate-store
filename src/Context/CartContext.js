import {  useReducer, useEffect } from "react";
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

    const addtocart=(id,stock,amount,singleitem)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,stock,amount,singleitem}})
    }
    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    useEffect(()=>{
        dispatch({type:"TOTAL_PRICE"})
    },[state.cart])
    const setDecrease=(id)=>{
        dispatch({type:"SET_DEC",payload:id})
    }
    const setIncrease=(id)=>{
        dispatch({type:"SET_INC",payload:id})
        
    }

return (
    <CartDataContext.Provider value={{...state,addtocart,removeItem,setDecrease,setIncrease}} >
        {props.children}
    </CartDataContext.Provider>
)
}
export default CartContext;