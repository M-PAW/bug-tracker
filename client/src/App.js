import React from 'react';
import Login from './Views/Login/Login'
import {useSelector} from 'react-redux'
import Authenticated from './Views/Authenticated/Authenticated';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <>
    {
      !auth.LoggedIn 
        ?<Login />
        :<Authenticated />
    }
    </>
  )
}

export default App;
