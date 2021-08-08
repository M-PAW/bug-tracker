import React from 'react';
import Login from './Views/Login/Login'
import {useSelector} from 'react-redux'
import ViewBugs from './Views/Pages/ViewBugs';
import Sidebar from './Views/Sidebar/Sidebar';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <>
    {
      !auth.LoggedIn 
        ?<Login />
        :<>
          <Sidebar />
          <ViewBugs />
        </>
    }
    </>
  )
}

export default App;
