import React, { Component } from 'react';
import { Redirect, HashRouter, Route} from 'react-router-dom';
import RedDot from '../RedDot/RedDot';
import GameScore from '../GameScore/GameScore';

import '../../App.css';



class PlayAim extends Component {
    constructor() {
        super();
        this.state = {
            timerOn: true,
            timerStart: 30000,
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
        document.addEventListener('keydown', this.handleKeyPressed);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
        document.removeEventListener('keydown', this.handleKeyPressed);
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

    shootHandler = () => {
        this.setState({
            posX: 10 + Math.random() * 1580,
            posY: 10 + Math.random() * 880,
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