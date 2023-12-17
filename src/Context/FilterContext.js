import { useReducer, useEffect } from "react";
import { FilterDataContext } from "./CreateContext";
import reducer from '../Reducer/FilterDataReducer'
import alldata from '../Database/Data.js'

const FilterContext = (props) => {
    const orignaldata = alldata
    let initialState = {
        filterData: [],
        allData: [],
        sortValue: '',
        Filter: {
            category: '',
            price: '',
            brand: '',
            rating: 0,
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'GET_DATA', payload: orignaldata });
    }, [orignaldata]);

    useEffect(() => {
        dispatch({ type: state.sortValue })
    }, [state.sortValue])

    useEffect(() => {
        dispatch({ type: "FILTER_DATA", payload: orignaldata })
    }, [state.Filter, orignaldata])




    const sorting = (event) => {
        event.stopPropagation()
        dispatch({ type: 'SORT_VALUE' });
    };

    const handleReset = () => {
        dispatch({ type: "RESET_ALL" })
    }

    const handleFilterAll = (event, n, val) => {
        event.stopPropagation()
        console.log(n, val)
        if (val) {
            let name = n
            let value = val
            dispatch({ type: "UPDATE_FILTER_DATA", payload: { name, value } })

        }
        else {

            let name = event.target.name
            let value = event.target.value
            dispatch({ type: "UPDATE_FILTER_DATA", payload: { name, value } })
        }
    }

    const handleBrandFilter = (event) => {
        event.stopPropagation()
        let value = event.target.value
        dispatch({ type: "UPDATE_BRAND_DATA", payload: value })

    }
    const handleFilterPrice = (event) => {
        event.stopPropagation()
        let minvalue = event.target.min
        let maxvalue = event.target.max
        dispatch({ type: "UPDATE_PRICE_DATA", payload: { minvalue, maxvalue } })

    }
    const handlePrice = (min, max) => {
        dispatch({ type: "UPDATE_PRICE_DATA", payload: { min, max } })

    }
    //   handle search text
    const  handleSearch=(text)=>{   
        dispatch({ type: 'GET_SEARCH', payload: text })
    }

    return (
        <FilterDataContext.Provider value={{ ...state, handlePrice, sorting,handleSearch, handleFilterPrice, handleReset, handleFilterAll, handleBrandFilter }}>
            {props.children}
        </FilterDataContext.Provider>
    )
}
export default FilterContext;