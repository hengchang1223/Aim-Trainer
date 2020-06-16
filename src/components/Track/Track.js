import React, { Component } from 'react';
import RedDot from './red_dot.png';

class Track extends Component {
    constructor(props) {
        super();
        this.state = {
            hover: props.hover,
            timerOn: false,
            timerSart: 0,
            timerTime: 0,
            trackStart: false,
            posX: 100,
            posY: 100
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
            var x = Math.floor((Math.random() * 100)+1);
            var y = Math.floor((Math.random() * 100)+1);
            this.setState({
                posX: x,
                posY: y
            });
        }, 100);
    };

    stopTracking = () => {
        this.setState({
            trackStart: false,
            posX: 100,
            posY: 100
        });
        clearInterval(this.moving);
    };
    
    render() {

        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let left = this.state.posX + 'px';
        let top = this.state.posY + 'px';

        return (
            <div>
                <div>
                    <button onClick={this.startTracking}>Start</button>
                    <button onClick={this.stopTracking}>Stop</button>
                </div>
                <div>
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>

                <div>
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

                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.resetTimer}>Reset</button>
                )}
            </div>
        )
    }
}

export default Track;
