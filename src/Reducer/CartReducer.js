const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            let { id, stock, amount, singleitem } = action.payload
            //tackle a existing product
            let existingitem = state.cart.find((p) => p.id === id + "yo")
            if (existingitem) {
                let updateitem = state.cart.map((p) => {
                    if (p.id === id + "yo") {
                        let newNoitem = p.NoOfItem + amount;
                        if (newNoitem > stock) {
                            newNoitem = stock;
                        }
                        return {
                            ...p,
                            NoOfItem: newNoitem
                        }
                    }

                    else {
                        return p;
                    }
                })
                return {
                    ...state,
                    cart: updateitem
                }
            }
            else {
                const item = {
                    id: id + "yo",//jdo database ch pavagey na ta isdi id apneaap change ho jaygi now chinta not
                    NoOfItem: amount,
                    title: singleitem.title,
                    thumbnail: singleitem.thumbnail,
                    price: singleitem.price,
                    stock: singleitem.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, item]
                }}

        case "REMOVE_ITEM":
            let updatedcart = state.cart.filter((p) =>
                p.id !== action.payload)
            return {
                ...state,
                cart: updatedcart,
            }
        case "TOTAL_PRICE":
            let total = state.cart.reduce((initial, p) => {
                let { price, NoOfItem} = p
                initial = initial + price * NoOfItem
                return initial;
            }, 0)
            return {
                ...state,
                totalprice: total
            }
        case "SET_DEC":
            let curitem = state.cart.map((p) => {
                if (p.id === action.payload) {
                    let item = p.NoOfItem - 1
                    if (item <= 1) {
                        item = 1;
                    }
                    return {
                        ...p,
                        NoOfItem: item
                    }
                }
                else {
                    return p;
                }
            })
            return {
                ...state,
                cart: curitem
            }

        case "SET_INC":
            let curritem = state.cart.map((p) => {
                if (p.id === action.payload) {
                    let item = p.NoOfItem + 1;
                    if (item >= p.stock) {
                        item = p.stock;
                    }
                    return {
                        ...p,
                        NoOfItem: item
                    }
                }
                else {
                    return p;
                }
            })
            return {
                ...state,
                cart: curritem
            }


        default:
            return {
                ...state
            }
    }
}
export default CartReducer;