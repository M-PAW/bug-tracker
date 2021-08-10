import React from 'react'
import "./bugViewSection.css";

const bugViewSection = (props) => {
    const {title, info} = props;
    return (
        <div className="view-section">
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}

export default bugViewSection
