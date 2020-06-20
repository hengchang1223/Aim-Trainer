import React from "react";
import PlayAim from './PlayAim';
import Rank from '../Rank/Rank';
import {HashRouter, Route, Link} from 'react-router-dom';
import '../../App.css';

import Help from '../Help/Help';

const Aim = () => {
    var helpText = "After hitting Play button, you have 30 \n\nseconds to shoot targets. Try to shoot\n\n as many targets as possible.\n\n Good Luck!"
    var sourceName = 'Aim';

    return (
        <HashRouter basename="/">
            <div>
                <div className="outerContainer">
                    <div className="container">
                            <h1>Aiming Mode</h1>
                            <Link className="gameSetting" to='/Aim/PlayAim/'>
                                <h2>Play</h2>
                            </Link>
                    
                            <Link className="gameSetting" to='/Aim/Help/'>
                                <h2>Help</h2>
                            </Link>

                            <Link className="gameSetting" to='/Aim/Rank/'>
                                <h2>Rank</h2>
                            </Link>

                            <Link className="gameSetting" to='/'>
                                <h2>Return</h2>
                            </Link>
                    </div>
                    <Route path="/Aim/PlayAim" component={PlayAim} />
                    <Route 
                    path="/Aim/Help" 
                    render={(props) => (
                        <Help {...props} text={helpText} sourceName={sourceName} />
                    )}
                    />
                    <Route 
                    path="/Aim/Rank" 
                    render={(props) => (
                        <Rank {...props} sourceName={sourceName} />
                    )}
                    />
                </div>
            </div>
        </HashRouter>
    )
}

export default Aim;