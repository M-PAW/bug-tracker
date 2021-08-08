import React from 'react'

import ViewBugs from '../Pages/ViewBugs';
import Sidebar from '../Sidebar/Sidebar';

import './authenticated.css';

const Authenticated = () => {
    return (
        <div className="auth-container">
            <Sidebar />
            <ViewBugs />
        </div>
    )
}

export default Authenticated
