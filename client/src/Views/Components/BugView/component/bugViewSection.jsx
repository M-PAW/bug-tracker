import React from 'react'
import "./bugViewSection.css";

const bugViewSection = (props) => {
    const {title, info} = props;
    return (
        <div className="view-section">
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
}

export default bugViewSection
