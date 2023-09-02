import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

function FramerMotionLearnings() {
  return <div></div>;
}

function LayoutAnimation(){
  const [isMaxiMized,setisMaximized] = React.useState(false);
  return(
    <>
      <motion.div 
        layout={true}
        transition={SPRING}
        className={`wrapper ${isMaxiMized ? 'maximized' : ""} `}>
        <motion.p layout="position">
          Hello World
        </motion.p>
      </motion.div>
      <button onClick={() => setisMaximized(!isMaxiMized)}>Toggle {isMaxiMized}</button>
    </>
  );
}

const SPRING = {
  type: 'spring',
  stiffness: 200,
  damping: 40
}

function Button({children}){
  return(
    <button
      style={{
        border: '2px solid',
        color: 'green',
        borderColor: 'green',
        background: 'white',
        borderRadius: '4px',
        padding: '16px',
        margin: '8',
      }}
    >
      {children}
    </button>
  );
}

export default FramerMotionLearnings;
