import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import RedDot from '../RedDot/RedDot';

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
            keyPressed: false
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
                posY: 450
            });
            alert('Success: ' + this.state.success);
          }
        }, 10);
      };
    
    //   stopTimer = () => {
    //     clearInterval(this.timer);
    //     this.setState({ timerOn: false });
    //     alert('Success: ' + this.state.success);
    //   };

    //   resetTimer = () => {
    //     if (this.state.timerOn === false) {
    //       this.setState({
    //         timerTime: 30000,
    //         timerStart: 30000,
    //         posX: 800,
    //         posY: 450,
    //         success: 0
    //       });
    //     }
    //   };
    
    //   adjustTimer = input => {
    //     const { timerTime, timerOn } = this.state;
    //     if (!timerOn) {
    //       if (input === "incHours" && timerTime + 3600000 < 216000000) {
    //         this.setState({ timerTime: timerTime + 3600000 });
    //       } else if (input === "decHours" && timerTime - 3600000 >= 0) {
    //         this.setState({ timerTime: timerTime - 3600000 });
    //       } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
    //         this.setState({ timerTime: timerTime + 60000 });
    //       } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
    //         this.setState({ timerTime: timerTime - 60000 });
    //       } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
    //         this.setState({ timerTime: timerTime + 1000 });
    //       } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
    //         this.setState({ timerTime: timerTime - 1000 });
    //       }
    //     }
    //   };

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
        // const { timerTime, timerStart, timerOn } = this.state;
        const { success, keyPressed, posX, posY } = this.state;
        // let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        // let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
        let left = posX + 'px';
        let top = posY + 'px';
    
        return (
            <div className="outerContainer">

                {/* <div className="Countdown"> */}
                    {/* <div className="Countdown-display">
                    <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
                    <button onClick={() => this.adjustTimer("incMinutes")}>
                        &#8679;
                    </button>
                    <button onClick={() => this.adjustTimer("incSeconds")}>
                        &#8679;
                    </button> */}
            
                    {/* <div className="Countdown-time"> */}
                        {/* {hours} : {minutes} : {seconds} */}
                    {/* </div> */}
            
                    {/* <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
                    <button onClick={() => this.adjustTimer("decMinutes")}>
                        &#8681;
                    </button>
                    <button onClick={() => this.adjustTimer("decSeconds")}>
                        &#8681;
                    </button>
                    </div> */}
            
                    {/* {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                    <button className="Button-start" onClick={this.startTimer}>
                        Start
                    </button>
                    )}
                    {timerOn === true && timerTime >= 1000 && (
                    <button className="Button-stop" onClick={this.stopTimer}>
                        Stop
                    </button>
                    )}
                    {timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                        <button className="Button-start" onClick={this.startTimer}>
                        Resume
                        </button>
                    )}
            
                    {(timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <button className="Button-reset" onClick={this.resetTimer}>
                        Reset
                        </button>
                    )}
                </div> */}

                <div>
                    {success}
                </div>

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
                </div>
                
            </div>
        );
      }
}

export default PlayAim;