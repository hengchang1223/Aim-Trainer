import React, { Component } from 'react';
import { Redirect, HashRouter, Route} from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';



class PlayFps
 extends Component {
     /*
     timerOn: indicate game is going on or not
     timerTime: 30000ms == 30s countdown
     posX, posY: (X, Y) position of target
     velocity: moving speed of target
     direction: moving direction of target
     success: how many targets have been successfully aimed
     onTarget: indicate the mouse pointer on the target or not
     keyPressed: detect esc key pressed or not
     gameOver: trigger Redirect to another page
     */
    constructor() {
        super();
        this.state = {
            timerOn: true,
            timerTime: 30000,
            posX: 800,
            posY: 450,
            velocity: 2,
            direction: Math.PI / 2,
            success: 0,
            onTarget: false,
            keyPressed: false,
            gameOver: false
        };
    };

    componentDidMount() {
        // Starting Countdown, Moving target, Changing target direction, detecting ESC key pressed and mouse clicked or not
        this.startTimer();
        this.startTracking();
        document.addEventListener('keydown', this.handleKeyPressed);
        document.addEventListener('click', this.handleClicked);
    };

    componentWillUnmount() {
        // Clear all event listeners and setInterval functions after unmounting the component
        clearInterval(this.timer);
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
        document.removeEventListener('keydown', this.handleKeyPressed);
        document.removeEventListener('click', this.handleClicked);
    };

    startTimer = () => {
        // set up setInterval function and update time each 10ms
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            clearInterval(this.moving);
            clearInterval(this.changeDirection);
            this.setState({
                timerOn: false,
                posX: 800,
                posY: 450,
                gameOver: true
            });            
          }
        }, 10);
    };

    startTracking = () => {
        // move target each 20ms
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

        // change direction of target each 2000ms (2s)
        this.changeDirection = setInterval(() =>{
            this.setState({
                direction: Math.random() * Math.PI * 2
            });
        }, 2000);
    };

    hoverOnHandler = () => this.setState({onTarget: true});

    hoverOutHandler = () => this.setState({onTarget: false});

    shootHandler = () => {
        // change target to random position after been successfully aimed
        this.setState({
            posX: 30 + Math.random() * 1540,
            posY: 30 + Math.random() * 840,
            success: this.state.success + 1
        })
    };

    handleKeyPressed = (e) => {
        // esc key press detection
        if (e.keyCode === 27) {
            this.setState({
                keyPressed: true
            });
        };
    };

    handleClicked = (e) => {
        // only when the mouse pointer is on the target and the game is going on, the click will affect
        if (this.state.onTarget && this.state.timerOn) {
            this.shootHandler();
        };
    };

    render() {
        const { success, keyPressed, timerOn, posX, posY, gameOver } = this.state;
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
                        onMouseEnter={timerOn ? this.hoverOnHandler : null}
                        onMouseLeave={timerOn ? this.hoverOutHandler : null}
                        style={{padding: '0px', left, top, position: 'absolute'}}
                        >
                            <RedDot size={40}/>
                        </div>
                        {keyPressed ? (
                            <Redirect to={'/Fps'} />
                        ) : null}
                        {gameOver && (
                            <Redirect to={'/Fps/PlayFps/GameScore'} />
                        )}
                    </div>
                </div>
                <Route
                    path="/Fps/PlayFps/GameScore"
                    render={(props) => (
                        <GameScore {...props} sourceName={'Fps'} gameScore={success} />
                    )}
                />
            </HashRouter>
        );
      }
}

export default PlayFps;