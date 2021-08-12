import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewBugs from '../Pages/ViewBugs/ViewBugs';
import Dashboard from '../Pages/Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar';
import BugForm from '../Pages/CreateEditBug/BugForm';

import './authenticated.css';
const Authenticated = () => {
    return (
        <div className="auth-container">
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/viewbugs" component={ViewBugs} />
                    <Route path="/create">
                        <BugForm title={"Create Bug"} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Authenticated
