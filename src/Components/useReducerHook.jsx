import React, { useReducer } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/useReducerHook.css"

const initialState = 0;
const reducer = (state, action) => {

    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    if (action.type === "NAME") {
        return "My name is Yogesh Gaur"
    }
    return state;
}

const useReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>

            <div className="outerContainer">
                <h1>{state}</h1>
                <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
                <br/>
                <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
                <br/>
                <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "NAME" })}>MyName</button>
            </div>
        </>
    )
}

export default useReducerHook;



