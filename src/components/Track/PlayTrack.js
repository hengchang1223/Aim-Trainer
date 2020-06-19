import React, { Component } from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';

class PlayTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: 30000,
            timerTime: 30000,
            trackOn: false,
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
        this.startTracking();
        this.startTimer();
        document.addEventListener('keydown', this.handleKeyPressed);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.track);
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
        document.removeEventListener('keydown', this.handleKeyPressed);
    };

    startTimer = () => {
        this.setState({
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });

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
        this.setState({
            trackOn: true
        });
        
        this.moving = setInterval(() =>{
            var x = this.state.posX + this.state.velocity * Math.sin(this.state.direction);
            var y = this.state.posY + this.state.velocity * Math.cos(this.state.direction);
            if ( x < 10 || x > 1590 ) {
                this.setState({
                    direction: Math.PI * 2 - this.state.direction
                });
            } else if ( y < 10 || y > 890 ) {
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

        this.changeDirection = setInterval(() =>{
            this.setState({
                direction: Math.random() * Math.PI * 2
            });
        }, 2000);
    };

    stopTracking = () => {
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
                            <RedDot />
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
