import React, { Component } from 'react';
import RedDot from '../RedDot/RedDot';

import '../../App.css';

class PlayTrack extends Component {
    constructor() {
        super();
        this.state = {
            // timerOn: false,
            timerStart: 30000,
            timerTime: 30000,
            // trackOn: false,
            trackStart: 0,
            trackTime: 0,
            // trackStart: false,
            posX: 800,
            posY: 450,
            velocity: 5,
            direction: Math.PI / 2
        }
        this.startTracking();
        this.startTimer();
    }

    startTimer = () => {
        this.setState({
        //   timerOn: true,
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
            this.stopTracking();
            // this.setState({ timerOn: false });
            // let message = 'Success: ' + this.state.success.toString();
            alert('Time On Track: ' + this.state.trackTime);
          }
        }, 10);
      };

    hoverOnHandler = () => {
        this.setState({
            // timerOn: true,
            // timerTime: this.state.timerTime,
            // timerStart: Date.now() - this.state.timerTime
            trackTime: this.state.trackTime,
            trackStart: Date.now() - this.state.trackTime
        });

        this.track = setInterval(() => {
            this.setState({
                trackTime: Date.now() - this.state.trackStart
            });
        }, 10);

    };

    hoverOutHandler = () => {
        // this.setState({
        //     timerOn: false
        // });
        // clearInterval(this.timer);
        clearInterval(this.track);
    };

    // resetTimer = () => {
    //     this.setState({
    //       timerStart: 0,
    //       timerTime: 0
    //     });
    // };

    startTracking = () => {
        // this.setState({
        //     trackOn: true
        // });
        
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
            // trackOn: false,
            posX: 800,
            posY: 450
        });
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
    };
    
    render() {

        const { trackTime } = this.state;
        let trackCentiseconds = ("0" + (Math.floor(trackTime / 10) % 100)).slice(-2);
        let trackSeconds = ("0" + (Math.floor(trackTime / 1000) % 60)).slice(-2);
        // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        // let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        // let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let left = this.state.posX + 'px';
        let top = this.state.posY + 'px';

        return (
            <div className="outerContainer">
                <div>
                    {/* <button onClick={this.startTracking}>Start</button> */}
                    {/* <button onClick={this.stopTracking}>Stop</button> */}

                    {/* {this.state.timerOn === false && this.state.timerTime > 0 && (
                    // <button onClick={this.resetTimer}>Reset</button>
                )} */}
                </div>
                {/* <div>
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div> */}
                <div>
                    {trackSeconds} : {trackCentiseconds}
                    {/* <br></br>
                    {seconds} : {centiseconds} */}
                </div>

                <div className="container">
                    <div
                    // onMouseEnter={this.state.trackStart && this.hoverOnHandler}
                    // onMouseLeave={this.state.trackStart && this.hoverOutHandler}
                    onMouseEnter={this.hoverOnHandler}
                    onMouseLeave={this.hoverOutHandler}
                    style={{padding: '0px', left, top, position: 'absolute'}}
                    >
                        <RedDot />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayTrack;
