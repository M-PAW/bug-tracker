import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';
import { Button } from 'react-bootstrap';
import './login.css';


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
        // console.log(formInput);
    }

    function submitHandler(event) {
        dispatch(signIn(formInput));
        event.preventDefault();
    }

    return (
        <div className="loginBG">
            <div className="background-modal">
                <div className="loginForm">
                    <h1>Black <span id="flag">Flag</span> <span id="version">V1.0</span></h1>
                    <form 
                        action=""
                        className="login-panel"
                    >
                        <input 
                            name='name' 
                            type='text' 
                            value={formInput.name} 
                            placeholder='Name' 
                            onChange={changeHandler}
                        />
                        <input 
                            name='password' 
                            type='password' 
                            value={formInput.password} 
                            placeholder='Password' 
                            onChange={changeHandler}
                        />
                        <br/>
                        <Button
                            onClick={submitHandler}
                            variant="secondary"
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
