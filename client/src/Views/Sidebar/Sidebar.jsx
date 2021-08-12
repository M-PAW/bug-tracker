import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signOut} from '../../Controllers/Redux/authSlice';
import './Sidebar.css';

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <div>
                <h1>Black Flag</h1>
                <Link to="/">Dashboard</Link>
                <hr />
                <Link to="/viewbugs">View Bugs</Link>
                <hr />
                <Link to="/create">Create Bug</Link>
                <hr />
            </div>
            <Button
                variant="danger"
                onClick={() => dispatch(signOut())}
            >
            Logout
            </Button>
        </div>
    )
}

export default Sidebar
