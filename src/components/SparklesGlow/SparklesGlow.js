import React from 'react';
import styled, { keyframes } from 'styled-components'

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';


const random = (min,max) => Math.floor(Math.random() * (max - min)) + min;

const generateSparkles = (color = DEFAULT_COLOR) => {
  return{
    id: String(random(10000, 99999)),
    created_at: Date.now(),
    color,
    size: random(10,20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    }
  };
}

function SparkleInstance({color,size,style}){
  return(
    <>
    <Svg
      width={size} 
      height={size}
      viewBox="0 0 160 160" 
      fill="none"
      style={style}
    >
      {/* <path
        d="all that stuff from before"
        fill={color}
      /> */}
      <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" fill="#FFC700"/>
    </Svg>
   
    </>
    
    
  );
}




function Sparkle({children}){
  
  const sparkle = generateSparkles();
  return(
   <Wrapper>
      <SparkleInstance 
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style}
      />
      <ChildWrapper>
        {/* <button>Generate Sparkle</button> */}
        {children}
      </ChildWrapper>
   </Wrapper>
  );
}

function SparklesGlow() {
  return <Sparkle />;
}

export default SparklesGlow;


const ChildWrapper = styled.strong`
  padding: 20px;
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;


const sparkleAnimation = keyframes`
0% {
  transform: scale(0) rotate(0deg);
}
50% {
  transform: scale(1) rotate(90deg);
}
100% {
  transform: scale(1) rotate(180deg);
}
`;

const Svg = styled.svg`
position: absolute;
animation: ${sparkleAnimation} 600ms forwards;
pointer-events: none;
z-index: 2;`;

