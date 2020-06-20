import React from 'react';
import Track from './components/Track/Track';
import Aim from './components/Aim/Aim';
import Fps from './components/Fps/Fps';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <HashRouter basename='/'>
            <div>
                <div className="outerContainer">
                    <div className="container">
                        <h1>Aim Trainer</h1>
                            <Link className="gameSetting" to='/Aim'>
                                <h2>Aiming Mode</h2>
                            </Link>

                            <Link className="gameSetting" to='/Track'>
                                <h2>Tracking Mode</h2>
                            </Link>

                            <Link className="gameSetting" to='/Fps'>
                                <h2>FPS Mode</h2>
                            </Link>
                    </div>
                </div>
                <Route path="/Track" component={Track} />
                <Route path="/Aim" component={Aim} />
                <Route path="/Fps" component={Fps} />
            </div>
        </HashRouter>
    )
    
};

export default App;