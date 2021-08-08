import React from 'react'
import {Button} from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <h2>Dashboard</h2>
                <hr />
                <h2>View Bugs</h2>
                <hr />
                <h2>Create Bug</h2>
                <hr />
            </div>
            <Button
                variant="danger"
            >
            Logout
            </Button>
        </div>
    )
}

export default Sidebar
