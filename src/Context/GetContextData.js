import { useEffect, useReducer } from "react";
import { DataContext } from "./CreateContext";
import reducer from '../Reducer/ProductReducer'
import data from '../Database/Data.js'

const GetContextData = (props) => {
    let initializer = {
        product: [],
        filtereditem: [],
        sorteditem: [],
        isLoading: false,
        isError: false,
       
        toprated: []
    }
    const [state, dispatch] = useReducer(reducer, initializer);

    function getdata() {
        dispatch({ type: 'LOADING', payload: '' })
        try {

            dispatch({ type: 'GET_DATA', payload: data })
            dispatch({ type: 'GET_TOP_DATA', payload: data })

        }
        catch (error) {
            dispatch({ type: 'GET_ERROR', payload: error })
        }
    }
    useEffect(() => {
        getdata();
    }, [])

    // function singleItemData(id) {
    //     dispatch({ type: 'ONE_LOADING', payload: '' })
    //     try {
    //         dispatch({ type: 'GET_SINGLE_DATA', payload: id })
    //     }
    //     catch (error) {
    //         dispatch({ type: 'GET_ERROR', payload: error })
    //     }
    // }
    // useEffect(() => {
    //     singleItemData();
    // }, [])


    return (
        <DataContext.Provider value={{ ...state }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default GetContextData;