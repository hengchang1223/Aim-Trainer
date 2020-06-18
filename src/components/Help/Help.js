import React from 'react';
import '../../App.css';

const Help = (props) => {
    return (
        <div className="outerContainer">
            <div className="container">
                <h1>Help</h1>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}

export default Help;