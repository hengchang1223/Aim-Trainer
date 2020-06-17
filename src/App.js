import React from 'react';

import Ready from './components/Ready/Ready';
import Track from './components/Track/Track';
import Aim from './components/Aim/Aim'
// import RedDot from './components/RedDot/RedDot';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import RedDot from './components/Track/RedDot';

const App = () => (
    <Router>
        <Route path="/" exact component={Ready} />
        <Route path="/Track" component={Track} />
        <Route path="/Aim" component={Aim} />
    </Router>
    
);

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