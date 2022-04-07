import React, { useEffect, useState } from "react";

function Login(){
    const [email, setEmail] = useState('')

    const onInputChange = (e) => {
        const value = e.target.value
        setEmail(value)
        console.log("Before = " + email)
    }

    useEffect(() => {
        console.log("After = " + email)
    }, [email])

    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type='email' value={email} onChange={onInputChange}/> 
            </form>
        </div>
    )
}

export default Login;