import React, { useState } from 'react'
import ViewSection from './component/bugViewSection';
import BugModel from '../../../Models/bugModel';
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {markComplete} from '../../../Controllers/Redux/bugSlice';
import EditPanel from '../../Pages/BugEditPanel/EditPanel';
import EditBug from '../../Pages/CreateEditBug/BugForm';
import './BugView.css';

const BugView = (props) => {
    const dispatch = useDispatch();

    const close = props.close;
    const bug = new BugModel(props.bug[0])

    const [displayEdit, setDisplayEdit] = useState(false)
    const editClicked = () => {
        setDisplayEdit(!displayEdit)
    }

    const deleteClicked = () => {

    }
    // console.log(props);
    return (
        <div className="bug-view">
            {
                !displayEdit &&
            <>
                <div className="close-button">
                    <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
                    <button onClick={close}>Close X</button>
                </div>
                <h2>{bug.name}</h2>
                <ViewSection title="Details" info={bug.details}/>
                <ViewSection title="Steps" info={bug.steps}/>
                <ViewSection title="Priority" info={bug.priority}/>
                <ViewSection title="Creator" info={bug.creator}/>
                <ViewSection title="App Version" info={bug.version}/>
                <ViewSection title="Time Created" info={bug.time}/>
                <div className="view-buttons">
                    <Button variant="primary" onClick={() => {dispatch(markComplete('x','z'))}}>Mark Complete</Button>
                </div>
            </>
            }
            {
                displayEdit && <EditBug title="Edit Bug" bug={bug} closeBug={editClicked}/>
            }
        </div>
    )
}

export default BugView
