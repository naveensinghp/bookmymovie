import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import React from 'react';
import styled from 'styled-components';

function App() {
  const [isEnabled,setIsEnabled] = React.useState(true);
  return (
   <Header>
   </Header>
  );
  // return(
  //   <>
  //     <Center>
  //       <motion.div
  //         className="yellow ball"
  //         initial={false}
  //         transition={{
  //           type: 'spring',
  //           stiffness: 200,
  //           restDelta:0.01
  //         }}
  //         animate={{
  //           y : isEnabled ? 60 : 0,
  //         }}
  //       />
        
  //       <button className="jbutton" onClick={() => setIsEnabled(!isEnabled)}>Toggle</button>
  //     </Center>
      
  //   </>
  // )
}


const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh
 
`;
export default App;

