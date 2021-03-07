import React ,{useContext} from 'react'
import {Detail} from "./ComA";
import "../styles/useContextHook.css"

const ComC = () => {
    const context = useContext(Detail)
    return (
        <>
           <h1>My name is {context}</h1> 
        </>
    )
}

export default ComC
