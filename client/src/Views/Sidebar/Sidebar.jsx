import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <h1>Black Flag</h1>
                <Link to="/">Dashboard</Link>
                <hr />
                <Link to="viewbugs">View Bugs</Link>
                <hr />
                <h4>Create Bug</h4>
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
