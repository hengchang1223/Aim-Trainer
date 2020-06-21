import React, { Component } from 'react';
import { Redirect, HashRouter, Route} from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';



class PlayFps
 extends Component {
    constructor() {
        super();
        this.state = {
            timerOn: false,
            timerStart: 30000,
            timerTime: 30000,
            posX: 800,
            posY: 450,
            velocity: 5,
            direction: Math.PI / 2,
            success: 0,
            onTarget: false,
            keyPressed: false,
            gameOver: false
        };
    };

    componentDidMount() {
        this.startTimer();
        this.startTracking();
        document.addEventListener('keydown', this.handleKeyPressed);
        document.addEventListener('click', this.handleClicked);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
        document.removeEventListener('keydown', this.handleKeyPressed);
        document.removeEventListener('click', this.handleClicked);
    };

    startTimer = () => {
        this.setState({
          timerOn: true,
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
            clearInterval(this.moving);
            clearInterval(this.changeDirection);
            this.setState({
                timerOn: false,
                posX: 800,
                posY: 450,
                gameOver: true
            });
            // alert('Success: ' + this.state.success);
            
          }
        }, 10);
    };

    startTracking = () => {
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
        }, 33);

        this.changeDirection = setInterval(() =>{
            this.setState({
                direction: Math.random() * Math.PI * 2
            });
        }, 2000);
    };

    hoverOnHandler = () => this.setState({onTarget: true});

    hoverOutHandler = () => this.setState({onTarget: false});

    shootHandler = () => {
        this.setState({
            posX: 30 + Math.random() * 1540,
            posY: 30 + Math.random() * 840,
            success: this.state.success + 1
        })
        // console.log(this.state.success);
    };

    handleKeyPressed = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                keyPressed: true
            });
        };
    };

    handleClicked = (e) => {
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
                        // onClick={timerOn ? this.shootHandler : null}
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