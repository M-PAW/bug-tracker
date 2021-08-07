import React from 'react'
import 

const BugCard = ({name, priority, version, clicked}) => {

    const Clicked = () => {
        clicked(name);
    }

    return (
        <div className="bug-card" onClick={Clicked}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{priority}</h4>
            <h5 className="version">{version}</h5>
        </div>
    )
}

export default BugCard
