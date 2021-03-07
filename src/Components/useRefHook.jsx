import React, { useRef, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/useRefHook.css"

const useRefHook = () => {
    const myName = useRef(null)
    const [show, setShow] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
        const name = myName.current.value;
        name === "" ? alert("Plz Enter Your Name ") : setShow(true)
    }
    return (
        <>
            <form action="" onSubmit={submitForm} className="outerContainer">
                <label htmlFor="name">Name</label>
                <div className="container">
                <input type="text" className="form-control" ref={myName} />
                </div>
                <br/>
                <button className="btn btn-outline-primary">Submit 💯</button>
            </form>
            <p>{show ? `Your Good name is ${myName.current.value}` : ""}</p>
        </>
    )
}

export default useRefHook


