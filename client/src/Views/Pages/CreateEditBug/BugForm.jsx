import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import BugModel from '../../../Models/bugModel';
import './bugForm.css';

const BugForm = (props) => {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    const ChangeHandler = (event) => {
        setBugObject({
            ...bugObject,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className="bug-create">
            {
                props.title === "Edit Bug" &&
                <div className="close-button">
                    <button onClick={props.closeBug}>Close</button>
                </div>
            }
            <h1>{props.title}</h1>
            <form>
                <input 
                    name='name' 
                    placeholder="Bug Name" 
                    onChange={ChangeHandler} 
                    value={bugObject.name} 
                    required 
                />

                <input 
                    name='version' 
                    placeholder="Application Version" 
                    onChange={ChangeHandler}
                    value={bugObject.version}
                    required 
                />

                <label>Details:</label>
                <textarea 
                    name='details' 
                    placeholder='Detailed description of the bug' 
                    onChange={ChangeHandler}
                    value={bugObject.details}
                    required 
                />

                <label>Steps:</label>
                <textarea 
                    name='steps' 
                    placeholder='Sterps to recreate the bug' 
                    onChange={ChangeHandler}
                    value={bugObject.steps}
                    required 
                />

                <div>
                    <label>Priority:</label>
                    <select 
                        name='priority' 
                        onChange={ChangeHandler}
                        value={bugObject.priority}
                        required
                    >
                        <option value='1'>High</option>
                        <option value='2'>Mid</option>
                        <option value='3'>Low</option>
                    </select>

                    <label>Assigned:</label>
                    <select 
                        name='assigned' 
                        onChange={ChangeHandler}
                        value={bugObject.assigned}
                        required
                    >
                        <option>Hulk</option>
                    </select>
                </div>

                <Button type="submit" variant="secondary">{props.title}</Button>
            </form>
        </div>
    )
}

export default BugForm
