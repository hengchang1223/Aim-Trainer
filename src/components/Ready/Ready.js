import React from 'react';
import { Link } from 'react-router-dom';

const Ready = () => {
    return (
        <div>
            <h1>Aim Trainer</h1>
            <Link to={'/Track'}>
                <button>Track Training</button>
            </Link>
        </div>
    );
};

export default Ready;
