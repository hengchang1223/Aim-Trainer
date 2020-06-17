import React, { Component} from 'react';

// import Ready from './components/Ready/Ready';
import Track from './components/Track/Track';
// import RedDot from './components/Track/RedDot';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import RedDot from './components/Track/RedDot';

// const App = () => (
//     <Router>
//         <Route path="/" exact component={Ready} />
//         <Route path="/Track" component={Track} />
//     </Router>
    
// );

class App extends Component {
    render() {
        return (
            <div>
                {/* <canvas id="track" width="600" height="400"></canvas> */}
                <Track hover={false} />
            </div>
        )
    }
}

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