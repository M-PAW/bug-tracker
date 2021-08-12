import React from 'react';
import {Button} from 'react-bootstrap';
import './EditPanel.css';

const EditPanel = (props) => {
    return (
        <div className='edit-panel'>
            <Button variant='secondary' onClick={props.editClicked}>Edit</Button>
            <Button variant='danger' onClick={props.deleteClicked}>Delete</Button>
        </div>
    )
}

export default EditPanel
