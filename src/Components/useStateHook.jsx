import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../styles/useStateHook.css"
const UseStateHook = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alluser, setAllUser] = useState([])
    const submitForm = (e) => {
        e.preventDefault();

        const newUser = { email, password }

        setAllUser(...alluser, newUser);

        setEmail("");
        setPassword("");
    }
    return (
        <>
            <form action="/" class="container my-5" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-primary">Submit</button>
            </form>
        </>
    )
}

export default UseStateHook
