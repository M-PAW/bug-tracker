import React from 'react';
import {Button} from 'react-bootstrap';
import './bugForm.css';

const BugForm = (props) => {
    return (
        <div className="bug-create">
            <h1>{props.title}</h1>
            <form>
                <input name='name' placeholder="Bug Name" required />

                <input name='version' placeholder="Application Version" required />

                <label>Details:</label>
                <textarea name='details' placeholder='Detailed description of the bug' required />

                <label>Steps:</label>
                <textarea name='steps' placeholder='Sterps to recreate the bug' required />

                <div>
                    <label>Priority:</label>
                    <select name='priority' required>
                        <option value='1'>High</option>
                        <option value='2'>Mid</option>
                        <option value='3'>Low</option>
                    </select>

                    <label>Assigned:</label>
                    <select name='assigned' required>
                        <option>Hulk</option>
                    </select>
                </div>

                <Button type="submit" variant="secondary">{props.title}</Button>
            </form>
        </div>
    )
}

export default BugForm
