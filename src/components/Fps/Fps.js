import React from "react";
import PlayFps from './PlayFps';
import Rank from '../Rank/Rank';
import {HashRouter, Route, Link} from 'react-router-dom';
import '../../App.css';

import Help from '../Help/Help';

const Fps = () => {
    var helpText = "After hitting Play button, you have 30 \n\nseconds to shoot moving targets. Try to \n\nshoot as many targets as possible.\n\n Good Luck!"
    var sourceName = 'Fps';

    return (
        <HashRouter basename="/">
            <div>
                <div className="outerContainer">
                    <div className="container">
                            <h1>FPS Mode</h1>
                            <Link className="gameSetting" to='/Fps/PlayFps/'>
                                <h2>Play</h2>
                            </Link>
                    
                            <Link className="gameSetting" to='/Fps/Help/'>
                                <h2>Help</h2>
                            </Link>

                            <Link className="gameSetting" to='/Fps/Rank/'>
                                <h2>Rank</h2>
                            </Link>

                            <Link className="gameSetting" to='/'>
                                <h2>Return</h2>
                            </Link>
                    </div>
                    <Route path="/Fps/PlayFps" component={PlayFps} />
                    <Route 
                    path="/Fps/Help" 
                    render={(props) => (
                        <Help {...props} text={helpText} sourceName={sourceName} />
                    )}
                    />
                    <Route 
                    path="/Fps/Rank" 
                    render={(props) => (
                        <Rank {...props} sourceName={sourceName} />
                    )}
                    />
                </div>
            </div>
        </HashRouter>
    )
}

export default Fps;