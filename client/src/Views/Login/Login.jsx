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
                    onChange={() => window.alert('User Typity!')}
                />
                <input 
                    name='password' 
                    type='password' 
                    value={'Null'} 
                    placeholder='Password' 
                    onChange={() => window.alert('Password Typity!')}
                />
                <button
                    type='submit'
                    onClick={() => window.alert('Submit-Login Fired!')}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
