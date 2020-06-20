import React from 'react';
import redDot from '../../assets/red_dot.png';


const RedDot = (props) => {
    let size = (props.size || 20) + 'px';

    return <div unselectable="on" className="unselectable"><img src={redDot} alt='RedDot' width={size} height={size} /></div>
}

export default RedDot;