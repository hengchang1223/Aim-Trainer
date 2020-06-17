import React from 'react';
import redDot from '../../assets/red_dot.png';


const RedDot = () => {
    return <div unselectable="on" className="unselectable"><img src={redDot} alt='RedDot' width='20' height='20' /></div>
}

export default RedDot;