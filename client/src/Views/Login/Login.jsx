import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';


const Login = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        password: "",
    })

    function changeHandler(event){
        if (event.target.name === "name"){
            if (event.target.value !== formInput.name) {
                setFormInput({...formInput, name: event.target.value})
            }
        }
        if (event.target.name === "password") {
            if (event.target.value !== formInput.password) {
                setFormInput({...formInput, password: event.target.value})
            }
        }
        console.log(formInput);
    }

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
                    // value={formInput.name} 
                    placeholder='Name' 
                    onChange={changeHandler}
                />
                <input 
                    name='password' 
                    type='password' 
                    // value={'Null'} 
                    placeholder='Password' 
                    onChange={changeHandler}
                />
                <button
                    type='submit'
                    onClick={() => window.alert('Submit Fired!')}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
