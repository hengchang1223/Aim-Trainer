import React, { Component } from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';

class PlayTrack extends Component {
    /*
    timerTime: 30000ms == 30s Countdown
    trackOn: game is going on or not
    trackStart: help to calculate trackTime
    trackTime: time your mouse pointer successfully keeping track of the target
    posX, posY: (X, Y) position of target
    velocity: moving speed of target
    direction: moving direction of target
    keyPressed: esc key press detection
    gameOver: trigger Redirect to another page
    */
    constructor(props) {
        super(props);
        this.state = {
            timerTime: 30000,
            trackOn: true,
            trackStart: 0,
            trackTime: 0,
            posX: 800,
            posY: 450,
            velocity: 5,
            direction: Math.PI / 2,
            keyPressed: false,
            gameOver: false
        }
    };

    componentDidMount() {
        // Start Countdown, Tracking, moving, changing direction, and esc key detector
        this.startTracking();
        this.startTimer();
        document.addEventListener('keydown', this.handleKeyPressed);
    };

    componentWillUnmount() {
        // Clear all function started when mounted
        clearInterval(this.timer);
        clearInterval(this.track);
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
        document.removeEventListener('keydown', this.handleKeyPressed);
    };

    startTimer = () => {
        // Countdown function, update time each 10ms
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                clearInterval(this.track);
                this.stopTracking();
            }
        }, 10);
      };

    hoverOnHandler = () => {
        // Calculate track time
        this.setState({
            trackTime: this.state.trackTime,
            trackStart: Date.now() - this.state.trackTime
        });

        this.track = setInterval(() => {
            this.setState({
                trackTime: Date.now() - this.state.trackStart
            });
        }, 10);

    };

    hoverOutHandler = () => clearInterval(this.track);

    startTracking = () => {        
        // update target position each 20ms
        this.moving = setInterval(() =>{
            var x = this.state.posX + this.state.velocity * Math.sin(this.state.direction);
            var y = this.state.posY + this.state.velocity * Math.cos(this.state.direction);
            if ( x < 30 || x > 1570 ) {
                this.setState({
                    direction: Math.PI * 2 - this.state.direction
                });
            } else if ( y < 30 || y > 870 ) {
                this.setState({
                    direction: Math.PI - this.state.direction
                });
            } else {
                this.setState({
                    posX: x,
                    posY: y
                });
            };
        }, 20);

        // change direction each 2000ms (2s)
        this.changeDirection = setInterval(() =>{
            this.setState({
                direction: Math.random() * Math.PI * 2
            });
        }, 2000);
    };

    stopTracking = () => {
        // stop moving and changing direction after time is up or game is quitted
        this.setState({
            trackOn: false,
            gameOver: true,
            posX: 800,
            posY: 450
        });
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
    };

    handleKeyPressed = (e) => {
        // update keyPressed status after esc is pressed
        if (e.keyCode === 27) {
            this.setState({
                keyPressed: true
            });
        };
    };

    
    render() {

        const { trackTime, keyPressed, gameOver, trackOn } = this.state;
        let trackCentiseconds = ("0" + (Math.floor(trackTime / 10) % 100)).slice(-2);
        let trackSeconds = ("0" + (Math.floor(trackTime / 1000) % 60)).slice(-2);
        let left = this.state.posX + 'px';
        let top = this.state.posY + 'px';

        return (
            <HashRouter basename='/'>

                <div className="outerContainer">
                    {!gameOver && (
                        <div>
                            {trackSeconds} : {trackCentiseconds}
                        </div>
                    )}

                    <div className="container">
                        <div
                        onMouseEnter={trackOn ? this.hoverOnHandler : null}
                        onMouseLeave={trackOn ? this.hoverOutHandler : null}
                        style={{padding: '0px', left, top, position: 'absolute'}}
                        >
                            <RedDot size={40} />
                        {keyPressed && (
                            <Redirect to={'/Track'} />
                        )}
                        {gameOver && (
                            <Redirect to={'/Track/PlayTrack/GameScore'} />
                        )}
                        </div>
                    </div>
                </div>
                <Route
                    path="/Track/PlayTrack/GameScore"
                    render={(props) => (
                        <GameScore {...props} sourceName={'Track'} gameScore={trackTime} />
                    )}
                />
            </HashRouter>
        )
    }
}

export default PlayTrack;
