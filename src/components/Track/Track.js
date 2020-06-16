import React, { Component } from 'react';
import RedDot from './red_dot.png';
// import RedDot from './RedDot';

class Track extends Component {
    constructor(props) {
        super();
        this.state = {
            hover: props.hover
        }
        
    }

    hoverOnHandler = () => {
        this.setState({
            hover: true
        })
    }

    hoverOutHandler = () => {
        this.setState({
            hover: false
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <img 
                    src={RedDot} 
                    alt='RedDot' 
                    width='20'
                    height='20'
                    onMouseEnter={this.hoverOnHandler}
                    onMouseLeave={this.hoverOutHandler}
                    style={{padding: '0px', left: '100px', top: '100px', position: 'absolute'}}
                    />
                </div>
                {this.state.hover && Date.now()}
            </div>
        )
    }
}

// const Track = (props) => {
//     const [hover, setHover] = useState(props.hover);

//     return (
        // <div>
        //     <div>
        //         <img 
        //         src={RedDot} 
        //         alt='RedDot' 
        //         width='20'
        //         height='20'
        //         onMouseEnter={() => setHover(true)}
        //         onMouseLeave={() => setHover(false)}
        //         style={{padding: '0px', left: '100px', top: '100px', position: 'absolute'}}
        //         />
        //     </div>
        //     {hover && Date.now()}
        // </div>
//     )
// }

export default Track;
