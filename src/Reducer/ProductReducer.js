const ProductReducer = (state, action) => {
    switch (action.type) {

        case "GET_DATA":
            return {
                ...state,
                product: action.payload,
                isLoading:false
            }
        case "GET_TOP_DATA":
            return {
                ...state,
                filtereditem: (action.payload).sort((a,b)=>
                b.discountPercentage-a.discountPercentage).slice(0,10),
                isLoading:false
            }
        case "GET_ERROR":
            return {
                ...state,
                isError: true
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_SINGLE_DATA":
            return{
                ...state,
                singleitem:action.payload,
                isLoading:false
            }
        case"ONE_LOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state;

    }


}

export default ProductReducer