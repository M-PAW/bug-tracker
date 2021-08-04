import React from 'react'

const Login = () => {
    return (
        <div className="loginBG">
            <form 
                action=""
                className="login-panel"
            >
                <h1>Login</h1>
                <input 
                    name='name' 
                    type='text' 
                    value={'Null'} 
                    placeholder='Name' 
                    onChange={() => window.alert('Typity Typity!')}
                />
            </form>
        </div>
    )
}

export default Login
