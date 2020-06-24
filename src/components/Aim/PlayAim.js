import React, { Component } from 'react';
import { Redirect, HashRouter, Route} from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';

class PlayAim extends Component {
    /*
    timerOn: the countdown is going on
    timerTime: 30000ms which is 30s count down
    posX, posY: (X, Y) position of target
    success: how many targets are successfully aimed
    keyPressed: decide whether esc key pressed or not
    gameOver: trigger Redirect to another page
    */
    constructor() {
        super();
        this.state = {
            timerOn: true,
            timerTime: 30000,
            posX: 800,
            posY: 450,
            success: 0,
            keyPressed: false,
            gameOver: false
        };
    };

    componentDidMount() {
        this.startTimer();
        // detect esc key pressed or not
        document.addEventListener('keydown', this.handleKeyPressed);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        // remove event listener when unmounting the component
        document.removeEventListener('keydown', this.handleKeyPressed);
    };

    startTimer = () => {
        // setup setInterval function to update time as countdown going on
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            // when countdown is over, stop the setInterval function and set all the settings to gameover status
            clearInterval(this.timer);
            this.setState({
                timerOn: false,
                posX: 800,
                posY: 450,
                gameOver: true
            });            
          }
        }, 10);
      };

    shootHandler = () => {
        // update position after user successfully aimed a target
        this.setState({
            posX: 10 + Math.random() * 1580,
            posY: 10 + Math.random() * 880,
            success: this.state.success + 1
        })
    };

    handleKeyPressed = (e) => {
        // set keyPressed to true after detecting esc pressed
        if (e.keyCode === 27) {
            this.setState({
                keyPressed: true
            });
        };
    };

    render() {
        const { success, keyPressed, posX, posY, gameOver } = this.state;
        let left = posX + 'px';
        let top = posY + 'px';
    
        return (
            <HashRouter basename='/'>
                <div className="outerContainer">
                    {!gameOver && (
                        <div>
                            {success}
                        </div>
                    )}

                    <div className="container">
                        <div 
                        onClick={this.state.timerOn ? this.shootHandler : null}
                        style={{padding: '0px', left, top, position: 'absolute'}}
                        >
                            <RedDot />
                        </div>
                        {keyPressed ? (
                            <Redirect to={'/Aim'} />
                        ) : null}
                        {gameOver && (
                            <Redirect to={'/Aim/PlayAim/GameScore'} />
                        )}
                    </div>
                </div>
                <Route
                    path="/Aim/PlayAim/GameScore"
                    render={(props) => (
                        <GameScore {...props} sourceName={'Aim'} gameScore={success} />
                    )}
                />
            </HashRouter>
        );
      }
}

export default PlayAim;