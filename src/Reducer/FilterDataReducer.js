export default function FilterDataReducer(state, action) {
    let type;
    let entervalue;
    switch (action.type) {

        // get all data 

        case "GET_DATA":
            return {
                ...state,
                filterData: [...action.payload],
                allData: [...action.payload],

            }

        // for sorting the data in order=>

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

        //it is for brand becoz of select option i have make it seprate

        case "UPDATE_BRAND_DATA":
            const brand = action.payload
            if (brand !== 'ALL')
                return {
                    ...state,
                    filterData: state.filterData.filter((p) => p.brand === brand)
                }
            return {
                ...state,
                filterData: [...state.allData]
            }

        // filter by price

        case "UPDATE_PRICE_DATA":
            const { minvalue, maxvalue } = action.payload
            const array = state.allData.filter((p) => (p.price >= minvalue) & (p.price <= maxvalue))
            return {
                ...state,
                filterData: [...array]
            }

        // for filter critaria

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
            let tempData = action.payload
            let { category, rating } = state.Filter

            //  filter by category 
            if (category) {
                if (category !== "ALL") {
                    tempData = tempData.filter((p) => p.category === category)
                    return {
                        ...state,
                        filterData: tempData
                    }
                }
            }

            // filter by rating

            if (rating) {
                if (rating !== " ") {
                    return {
                        ...state,
                        filterData: tempData.filter((p) => Math.round(p.rating) == rating)
                    }
                }
            }

            return {
                ...state,
                filterData: [...state.allData]
            }
        //reset all

        case "RESET_ALL":

            const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach((radioButton) => {
            radioButton.checked = false;
            
            const sortbtn=document.getElementById('sort')
            sortbtn.value="none"
            });
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
