import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import '../../App.css';

const Help = (props) => {
    return (
        <HashRouter basename="/">
            <div className="outerContainer">
                <div className="container">
                    <h1>Help</h1>
                    <h2>{props.text}</h2>
                    <h2>{"\nPress Esc key to quit the game."}</h2>

                    <Link className="gameSetting" to={'/'+props.sourceName}>
                        <h2>Return</h2>
                    </Link>
                </div>
            </div>
        </HashRouter>
    )
}

export default Help;