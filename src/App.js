import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import React from 'react';
import styled from 'styled-components';
import Select from "./components/Select/Select";
import ProgressBar from "./components/ProgressBar/ProgressBar";

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

function App() {
  const [isEnabled,setIsEnabled] = React.useState(true);

  // return (
  //   <>
  //     <Button>
  //       Cancelff
  //     </Button>
  //     <button
  //     style={{
  //       border: '2px solid',
  //       color: 'red',
  //       borderColor: 'red',
  //       borderRadius: '4px',
  //       padding: '16px',
  //       margin: '8',
  //     }}
  //   >
  //     Confirm
  //   </button>
  //   </>
  // );
  const [value,setValue] = React.useState("newst")
  return (
   <Header>
   </Header>
  // <>
  //   <ProgressBar value={50} size={50} />
  // </>
  

  // <>
  //   <div style={{padding: '20px'}}> 
  //     <Select
  //       label="sort"
  //       value={value}
  //       onchange={(ev) => setValue(ev.target.value)}
  //     >
  //     <option value="newst">Newest Release</option>
  //     <option value="game">Game Settings</option>
  //     <option value="cutest">Cuted Person</option>
  // </Select>
  //   </div>
  // </>
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
  //       {/* <LayoutAnimation /> */}
  //     </Center>
      
  //   </>
  // )
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


const ITEMS = [
  {
    id: '001',
    label: 'hello',
  },
  {
    id: '002',
    label: 'world'
  }
]; 


const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh
 
`;
export default App;

