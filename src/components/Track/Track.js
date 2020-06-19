import React from 'react';
import PlayTrack from './PlayTrack';
import Help from '../Help/Help';
import Rank from '../Rank/Rank';
import { HashRouter, Route, Link } from 'react-router-dom';

import '../../App.css';

const Track = () => {
    var helpText = "After hitting Play button, you have 30 \n\nseconds to track the target. Try to keep\n\n track of the target as long as possible.\n\n Good Luck!"
    var sourceName = "Track"

    return (
        <HashRouter basename="/">
            <div>
                <div className="outerContainer">
                    <div className="container">
                            <h1>Tracking</h1>
                            <Link className="gameSetting" to='/Track/PlayTrack/'>
                                <h2>Play</h2>
                            </Link>
                    
                            <Link className="gameSetting" to='/Track/Help/'>
                                <h2>Help</h2>
                            </Link>

                            <Link className="gameSetting" to='/Track/Rank/'>
                                <h2>Rank</h2>
                            </Link>

                            <Link className="gameSetting" to='/'>
                                <h2>Return</h2>
                            </Link>
                    </div>
                    <Route path="/Track/PlayTrack" component={PlayTrack} />
                    <Route 
                    path="/Track/Help" 
                    render={(props) => (
                        <Help {...props} text={helpText} sourceName={sourceName} />
                    )}
                    />
                    <Route
                    path="/Track/Rank"
                    render={(props) => (
                        <Rank {...props} sourceName={sourceName} />
                    )}
                    />
                </div>
            </div>
        </HashRouter>
    )
}

export default Track;