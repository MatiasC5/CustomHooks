import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}


export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [todosCount, setTodoCount] = useState(0)
    const [pendingTodosCount, setPendingTodosCount] = useState(0)



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // useEffect(() => {
    //     setTodoCount(todos.length)
    // }, [todos])

    // useEffect(() => {
    //     setPendingTodosCount(todos.filter(todo => !todo.done).length)
    // })



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO Add Todo]',
            payload: todo
        }
        dispatch(action)
    }


    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO Remove Todo]',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO Toggle Todo]',
            payload: id
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}








// const initialState = []

// const init = () => {
//     return JSON.parse(localStorage.getItem('todos')) || []
// }

// export const useTodo = () => {
//     const [todos, dispatch] = useReducer(todoReducer, initialState, init)
//     const [todosCount, setTodoCount] = useState(0)
//     const [pendingTodosCount, setPendingTodosCount] = useState(0)


//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos))
//     }, [todos])

//     useEffect(() => {
//         setTodoCount(todos.length)
//     }, [todos])

//     useEffect(() => {
//         setPendingTodosCount(todos.filter(todo => !todo.done).length)
//     }, [todos])


//     const handleNewTodo = (todo) => {

//         const action = {
//             type: '[TODO Add Todo]',
//             payload: todo
//         }
//         dispatch(action)
//     }


//     const handleDeleteTodo = (id) => {
//         dispatch({
//             type: '[TODO Remove Todo]',
//             payload: id
//         })
//     }


//     const handleToggleTodo = (id) => {
//         dispatch({
//             type: '[TODO Toggle Todo]',
//             payload: id
//         })
//     }






//     return {
//         todos,
//         handleNewTodo,
//         handleDeleteTodo,
//         handleToggleTodo,
//         pendingTodosCount,
//         todosCount,
//     }
// } 