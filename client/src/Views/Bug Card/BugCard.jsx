import React from 'react'
import './BugCard.css';

const BugCard = (props) => {

    const Clicked = () => {
        props.clicked();
    }

    const {name,priority,version} = props.props;

    return (
        <div className="bug-card" onClick={Clicked}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{priority}</h4>
            <h5 className="version">{version}</h5>
        </div>
    )
}

export default BugCard
