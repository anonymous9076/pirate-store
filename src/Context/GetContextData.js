import { useEffect, useReducer } from "react";
import {DataContext} from "./CreateContext";
import axios from 'axios'
import reducer from '../Reducer/ProductReducer'

const GetContextData = (props) => {
    let initializer = {
        product: [],
        filtereditem: [],
        sorteditem: [],
        isLoading: false,
        isError: false,
        singleitem: '',
        toprated:[]
    }
    const [state, dispatch] = useReducer(reducer, initializer);

    async function getdata() {
        dispatch({ type: 'LOADING', payload: '' })
        try {
            const res = await axios.get('http://localhost:8080/')
            let data = await res.data
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

    async function singleItemData(url) {
        dispatch({ type: 'ONE_LOADING', payload: '' })
        try {
            const res = await axios.get(url)
            let data = await res.data
            dispatch({ type: 'GET_SINGLE_DATA', payload: data })
        }
        catch (error) {
            dispatch({ type: 'GET_ERROR', payload: error })
        }
    }
    useEffect(() => {
        singleItemData();
    }, [])


    return (
        <DataContext.Provider value={{ ...state, singleItemData }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default GetContextData;