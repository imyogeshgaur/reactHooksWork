import React, { useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../styles/useEffectHook.css"

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count > 0) {
            document.title = `Current Count is ${count} 👍`
        } else {
            document.title = "Current Count is 0 👍"
        }
    })
    return (
        <>
            <div className="outerContainer">
                <h1>{count}</h1>
                <button className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Click me 😄</button>
            </div>
        </>
    )
}

export default UseEffectHook

