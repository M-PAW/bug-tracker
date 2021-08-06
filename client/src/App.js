import React from 'react';
import Login from './Views/Login/Login'
import {useSelector} from 'react-redux'

function App() {
  const {auth} = useSelector(state => state);
  return (
    <>
    {
      !auth.LoggedIn ? <Login />: <h1>Welcome</h1>
    }
    </>
  )
}

export default App;
