import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const Ready = () => {
    return (
        <div className="outerContainer">
            <div className="container">
                <h1>Aim Trainer</h1>
                <Link to={'/Track'}>
                    <button className="gameSetting">Track Training</button>
                </Link>
                <Link to={'/Aim'}>
                    <button className="gameSetting">Aim Training</button>
                </Link>
            </div>
        </div>
    );
};

export default Ready;
