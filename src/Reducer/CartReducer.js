const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            let { id, stock, NoOfItem, singleitem } = action.payload
            const item = {
                id: id + NoOfItem,//jdo database ch pavagey na ta isdi id apneaap change ho jaygi now chinta not
                NoOfItem,
                title: singleitem.title,
                thumbnail: singleitem.thumbnail,
                price: singleitem.price,
                stock: singleitem.stock
            }
            return {
                ...state,
                cart: [...state.cart, item]
            }

        case "REMOVE_ITEM":
            let updatedcart=state.cart.filter((p)=>
            p.id!==action.payload)
            return{
                ...state,
                cart:updatedcart,
            }    

        default:
            return {
                ...state
            }
    }
}
export default CartReducer;