import React from 'react';
import redDot from './red_dot.png';
// import styled, { keyframes } from 'styled-components';


// const fadeIn = keyframes`
//     0% {
//         opacity: 0;
//     }
//     100% {
//         opacity: 1;
//     }
// `

// const imgAnimated = styled.img`
//     animation: ${fadeIn} 2s infinite;
// `

// class RedDot extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             src: props.src
//         }
//     }
    
//     render() {
//         return <img src={redDot} alt='RedDot' />;
//     }
// }

const RedDot = () => {
    return (
        <div><img src={redDot} alt='RedDot' width='30' height='30' /></div>
    )
}

export default RedDot;