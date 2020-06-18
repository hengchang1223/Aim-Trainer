import React from 'react';

import Track from './components/Track/Track';
import Aim from './components/Aim/Aim'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

// const Ready = () => {
//     return (
//         <div className="outerContainer">
//             <div className="container">
//                 <h1>Aim Trainer</h1>
//                 <Link to={'/Track'}>
//                     <button className="gameSetting">Track Training</button>
//                 </Link>
                
//                 <Link to={'/Aim'}>
//                     <button className="gameSetting">Aim Training</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };
// import RedDot from './components/Track/RedDot';

const App = () => {
    return (
        <HashRouter basename='/'>
            <div>
                <div className="outerContainer">
                    <div className="container">
                        <h1>Aim Trainer</h1>
                            <Link className="gameSetting" to='/Track'>
                                <h2>Tracking</h2>
                            </Link>
                
                            <Link className="gameSetting" to='/Aim'>
                                <h2>Aiming</h2>
                            </Link>
                    </div>
                </div>
                <Route path="/Track" component={Track} />
                <Route path="/Aim" component={Aim} />
            </div>
        </HashRouter>
    )
    // <Router>
    //     <Route path="/" exact component={Ready} />
    //     <Route path="/Track" component={Track} />
    //     <Route path="/Aim" component={Aim} />
    // </Router>
    
};

// class App extends Component {
//     render() {
//         return (
//             <div >
//                 {/* <Track /> */}
//                 <Aim />
//                 {/* <RedDot /> */}
//             </div>
//         )
//     }
// }

export default App;

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <RedDot
//                 src='./components/Track/red_dot.jpg'
//                 />
//             </div>
//         )
//     }
// }