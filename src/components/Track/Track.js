// // import React, { Component } from 'react';
// import React from 'react';
// // import RedDot from '../RedDot/RedDot';

// import '../../App.css';

// class Track extends Component {
//     state = {
//         timerOn: false,
//         timerStart: 0,
//         timerTime: 0,
//         trackStart: false,
//         posX: 800,
//         posY: 450,
//         velocity: 5,
//         direction: Math.PI / 2
//     }

//     hoverOnHandler = () => {
//         this.setState({
//             timerOn: true,
//             timerTime: this.state.timerTime,
//             timerStart: Date.now() - this.state.timerTime
//         });

//         this.timer = setInterval(() => {
//             this.setState({
//                 timerTime: Date.now() - this.state.timerStart
//             });
//         }, 10);

//     };

//     hoverOutHandler = () => {
//         this.setState({
//             timerOn: false
//         });
//         clearInterval(this.timer);
//     };

//     resetTimer = () => {
//         this.setState({
//           timerStart: 0,
//           timerTime: 0
//         });
//     };

//     startTracking = () => {
//         this.setState({
//             trackStart: true
//         });
        
//         this.moving = setInterval(() =>{
//             var x = this.state.posX + this.state.velocity * Math.sin(this.state.direction);
//             var y = this.state.posY + this.state.velocity * Math.cos(this.state.direction);
//             if ( x < 10 || x > 1590 ) {
//                 this.setState({
//                     direction: Math.PI * 2 - this.state.direction
//                 });
//             } else if ( y < 10 || y > 890 ) {
//                 this.setState({
//                     direction: Math.PI - this.state.direction
//                 });
//             } else {
//                 this.setState({
//                     posX: x,
//                     posY: y
//                 });
//             };
//         }, 20);

//         this.changeDirection = setInterval(() =>{
//             this.setState({
//                 direction: Math.random() * Math.PI * 2
//             });
//         }, 2000);
//     };

//     stopTracking = () => {
//         this.setState({
//             trackStart: false,
//             posX: 800,
//             posY: 450
//         });
//         clearInterval(this.moving);
//         clearInterval(this.changeDirection);
//     };
    
//     render() {

//         const { timerTime } = this.state;
//         let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
//         let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//         let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
//         let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
//         let left = this.state.posX + 'px';
//         let top = this.state.posY + 'px';

//         return (
//             <div className="outerContainer">
                
//                 {/* <div>
//                     <button onClick={this.startTracking}>Start</button>
//                     <button onClick={this.stopTracking}>Stop</button>
//                     {this.state.timerOn === false && this.state.timerTime > 0 && (
//                     <button onClick={this.resetTimer}>Reset</button>
//                 )}
//                 </div>
//                 <div>
//                     {hours} : {minutes} : {seconds} : {centiseconds}
//                 </div>

//                 <div className="container">
//                     <div
//                     onMouseEnter={this.state.trackStart && this.hoverOnHandler}
//                     onMouseLeave={this.state.trackStart && this.hoverOutHandler}
//                     style={{padding: '0px', left, top, position: 'absolute'}}
//                     >
//                         <RedDot />
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
// }

// export default Track;
import React from 'react';
import PlayTrack from './PlayTrack';
import Help from '../Help/Help';
import { HashRouter, Route, Link } from 'react-router-dom';

import '../../App.css';

const Track = () => {
    var helpText = "After hitting Play button, you have 30 \n\nseconds to track the target. Try to keep\n\n track of the target as long as possible.\n\n Good Luck!"
    var sourceName = "/Track/"

    return (
        <HashRouter basename="/">
            <div>
                <div className="outerContainer">
                    <div className="container">
                            <h1>Tracking</h1>
                            <Link className="gameSetting" to='/Track/PlayTrack/'>
                                <h2>Play</h2>
                            </Link>
                    
                            <Link className="gameSetting" to='/Track/Help/'>
                                <h2>Help</h2>
                            </Link>

                            <Link className="gameSetting" to='/'>
                                <h2>Return</h2>
                            </Link>
                    </div>
                    <Route path="/Track/PlayTrack" component={PlayTrack} />
                    <Route 
                    path="/Track/Help" 
                    render={(props) => (
                        <Help {...props} text={helpText} sourceName={sourceName} />
                    )}
                    />
                </div>
            </div>
        </HashRouter>
    )
}

export default Track;