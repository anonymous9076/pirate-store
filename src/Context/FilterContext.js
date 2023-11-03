import { useContext, useReducer, useEffect } from "react";
import { DataContext, FilterDataContext } from "./CreateContext";
import reducer from '../Reducer/FilterDataReducer'

const FilterContext = (props) => {
    const data = useContext(DataContext)
    const orignaldata = data.product
    let initialState = {
        filterData: [],
        allData: [],
        sortValue: '',
        Filter: {
            category: '',
            price: '',
            brand:'',
            rating:0,
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
    }, [state.Filter])

   


    const sorting = (event) => {
        event.stopPropagation()
        dispatch({ type: 'SORT_VALUE' });
    };

    const handleReset = () => {
        dispatch({ type: "RESET_ALL" })
    }

    const handleFilterAll = (event) => {
        event.stopPropagation()
        let name = event.target.name
        let value = event.target.value
        dispatch({ type:"UPDATE_FILTER_DATA", payload: { name, value } })
    }
    const handleBrandFilter=(event)=>{
        event.stopPropagation()
        let value = event.target.value
        dispatch({ type:"UPDATE_BRAND_DATA", payload: value })

    }
    const handleFilterPrice=(event)=>{
        event.stopPropagation()
        let minvalue = event.target.min
        let maxvalue = event.target.max
        dispatch({ type:"UPDATE_PRICE_DATA", payload: {minvalue,maxvalue} })

    }

    return (
        <FilterDataContext.Provider value={{ ...state, sorting, handleFilterPrice,handleReset, handleFilterAll,handleBrandFilter }}>
            {props.children}
        </FilterDataContext.Provider>
    )
}
export default FilterContext;