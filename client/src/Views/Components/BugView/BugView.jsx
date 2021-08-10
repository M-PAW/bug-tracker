import React from 'react'
import ViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import './BugView.css';

const BugView = (props) => {
    const close = props.close;
    const bug = new BugModel(props.bug[0])
    // console.log(props);
    return (
        <div className="bug-view">
            <div className="close-button">
                <button onClick={close}>Close X</button>
            </div>
            <h2>{bug.name}</h2>
            <ViewSection title="Details" info={bug.details}/>
            <ViewSection title="Steps" info={bug.steps}/>
            <ViewSection title="Priority" info={bug.priority}/>
            <ViewSection title="Creator" info={bug.creator}/>
            <ViewSection title="App Version" info={bug.version}/>
            <ViewSection title="Time Created" info={bug.time}/>
        </div>
    )
}

export default BugView
