export default function FilterDataReducer(state, action) {
    let type;
    let entervalue
    switch (action.type) {

        case "GET_DATA":
            return {
                ...state,
                filterData: [...action.payload],
                allData: [...action.payload]
            }
        case "SORT_VALUE":
            entervalue = document.getElementById("sort")
            type = entervalue.value
            return {
                ...state,
                sortValue: type
            }
        case "lowest":
            return {
                ...state,
                filterData: state.filterData.sort((a, b) => a.price - b.price)
            }
        case "highest":
            return {
                ...state,
                filterData: state.filterData.sort((a, b) => b.price - a.price)
            }
        case "a-z":
            return {
                ...state,
                filterData: state.filterData.sort((a, b) => a.title.localeCompare(b.title))
            }
        case "z-a":
            return {
                ...state,
                filterData: state.filterData.sort((a, b) => b.title.localeCompare(a.title))
            }
        case "UPDATE_FILTER_DATA":
            const { name, value } = action.payload
            return {
                ...state,
                Filter: {
                    ...state.Filter,
                    [name]: value
                }
            }

        case "FILTER_DATA":
            let tempData = [...state.allData]
            const { category, price } = state.Filter

            if (category) {
                if (category !== "ALL") {
                    tempData = tempData.filter((p) => p.category === category)
                    return {
                        ...state,
                        filterData: tempData
                    }
                }
            }

            if (price) {
                if (price != 1001) {
                    tempData = [...state.allData]
                    tempData = tempData.filter((p) => p.price <= price)
                    return {
                        ...state,
                        filterData: tempData
                    }
                }
                else {
                    tempData = [...state.allData]
                    tempData = tempData.filter((p) => p.price >= price)
                    return {
                        ...state,
                        filterData: tempData
                    }
                }
            }

            return {
                ...state,
                filterData: [...state.allData]
            }

        case "RESET_ALL":
            type = "none"
            return {
                ...state,
                filterData: [...state.allData],

            }

        default:
            return {
                ...state
            }

    }

}
