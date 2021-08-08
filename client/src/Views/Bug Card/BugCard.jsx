import React from 'react'
import './BugCard.css';
import PriorityController from '../../Controllers/priorityController';

const BugCard = (props) => {

    const Clicked = () => {
        props.clicked();
    }

    const {name,priority,version} = props.props;
    const {level, color} = PriorityController(priority);

    return (
        <div className="bug-card" style={{color:color}} onClick={Clicked}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{level}</h4>
            <h5 className="version">{version}</h5>
        </div>
    )
}

export default BugCard
