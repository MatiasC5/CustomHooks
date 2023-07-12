
import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        // Antes de la llamada 
        setState({
            ...state,
            isLoading: true
        })


        const response = await fetch(url)
        const data = await response.json()


        // Despues de la llamada 
        setState({
            data,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
        getFetch()
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}