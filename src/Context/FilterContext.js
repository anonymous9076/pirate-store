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
            rating: '',
            discount: ''
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: state.sortValue })
    }, [state.sortValue])

    useEffect(() => {
        dispatch({ type: "FILTER_DATA" })
    }, [state.Filter])

    useEffect(() => {
        dispatch({ type: 'GET_DATA', payload: orignaldata });
    }, [orignaldata]);


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

    return (
        <FilterDataContext.Provider value={{ ...state, sorting, handleReset, handleFilterAll }}>
            {props.children}
        </FilterDataContext.Provider>
    )
}
export default FilterContext;