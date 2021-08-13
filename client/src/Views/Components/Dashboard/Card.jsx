import React from 'react'
import Priority from '../../../Controllers/priorityController';
import './card.css';


const Card = (props) => {
    const {level, color} = Priority(props.priority);

    return (
        <div 
            className="dashboard-card" 
            onClick={props.clickThrough}
            style={{color: color}}
        >
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}

export default Card
