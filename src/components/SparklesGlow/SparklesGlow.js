import React from 'react';
import styled from 'styled-components'




const random = (min,max) => Math.floor(Math.random() * (max - min)) + min;

const generateSparkle = (color = DEFAULT_COLOR) => {
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
      <path
        d="all that stuff from before"
        fill={color}
      />
    </Svg>
    <button onClick={Sparkle}>Regenerate</button>
    </>
    
    
  );
}




// export default App;

function Sparkle({children}){
  const sparkle = generateSparkle();
  console.log({children});
  return(
   <Wrapper>
      <SparkleInstance 
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style}
      />
      <ChildWrapper>
        {children}
      </ChildWrapper>
   </Wrapper>
  );
}

function SparklesGlow() {
  return <div></div>;
}

export default SparklesGlow;


const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;


const Svg = styled.svg`
position: absolute;
pointer-events: none;
z-index: 2;`;