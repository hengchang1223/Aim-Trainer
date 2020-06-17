import React, { Component } from 'react';
import RedDot from './red_dot.png';

import './Track.css'

var T = require('./Transform');

class Track extends Component {
    constructor(props) {
        super();
        this.state = {
            hover: props.hover,
            timerOn: false,
            timerSart: 0,
            timerTime: 0,
            trackStart: false,
            posX: 800,
            posY: 450,
            velocity: 5,
            direction: Math.PI / 2
        }
        
    };

    hoverOnHandler = () => {
        this.setState({
            hover: true,
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);

    };

    hoverOutHandler = () => {
        this.setState({
            hover: false,
            timerOn: false
        });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
    };

    startTracking = () => {
        this.setState({
            trackStart: true
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
            trackStart: false,
            posX: 800,
            posY: 450
        });
        clearInterval(this.moving);
        clearInterval(this.changeDirection);
    };
    
    render() {

        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let left = this.state.posX + 'px';
        let top = this.state.posY + 'px';
        // var style = {
        //     transform: T.translate(
                
        //     )
        // }

        return (
            <div className="outerContainer">
                <div>
                    <button onClick={this.startTracking}>Start</button>
                    <button onClick={this.stopTracking}>Stop</button>
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.resetTimer}>Reset</button>
                )}
                </div>
                <div>
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>

                {/* <div 
                onMouseEnter={this.hoverOnHandler}
                onMouseLeave={this.hoverOutHandler}
                style={{padding: '0px', left, top, position: 'absolute'}}
                > */}
                {/* <div>
                    <canvas width='400' height='400'></canvas>
                </div> */}
                <div className="container">
                    <img 
                    src={RedDot} 
                    alt='RedDot' 
                    width='20'
                    height='20'
                    onMouseEnter={this.hoverOnHandler}
                    onMouseLeave={this.hoverOutHandler}
                    style={{padding: '0px', left, top, position: 'absolute'}}
                    />
                </div>
            </div>
        )
    }
}

export default Track;
