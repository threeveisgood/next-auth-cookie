import React, { useState } from 'react'
import { loginUser } from '../lib/auth'
import Router from 'next/router'

const LoginForm = () => {
    const [email, setEmail] = useState('Telly.Hoeger@billy.biz')
    const [password, setPassword] = useState('elvis.io')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = e => {        
        e.preventDefault()
        
        setError('')
        setIsLoading(true)

        loginUser(email, password).then(() => {
            Router.push("/profile")
            setIsLoading(false)
        })
        .catch(showError)
    }

    const showError = err => {
        console.log(err)
        const error = err.response && err.response.data || err.message
        setError(error)
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div><input type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            /></div>
            <div><input tpye="password"
             name="password"
             placeholder="password"
             value={password}
             onChange={e => setPassword(e.target.value)}
            /></div>
            <button disabled={isLoading} type="submit">
              {isLoading ? "Sending" : "Submit" }
            </button>
            {error && <div>{error}</div>}
    </form>    
    );
};

export default LoginForm;