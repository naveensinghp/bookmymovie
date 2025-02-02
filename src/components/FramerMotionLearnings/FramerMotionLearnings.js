import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import css from './FramerMotion.module.css';
import { ChevronDown, ChevronUp } from 'react-feather';
import { range } from '../../utils';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import Spacer from '../Spacer';


function FramerMotionLearnings() {
  const [isEnabled,setiSEnabled] = React.useState(false)
  return <>
    <div style={{background: 'black',height: '100vh'}}>
      {/* <h1>Hello Wolrd</h1> */}
      {/* <Toggle 
        value={isEnabled}
        onChange={setiSEnabled}
      />
      <FlexDemo />
      <LayoutAnimation /> */}
      <DynamicUpdate />
        <Spacer size={50} />
      {/* <WidgetProcessor total={12} /> */}
    </div>
  </>;
}

function DynamicUpdate(){
  const [animated,setAnimated] = React.useState(false);
  return(
    <Wrapper>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  background: slateblue;
`


function WidgetProcessor({total}){
  const [numOfProcessedWidget,setNumOfProcessingWidget] = React.useState(0);
  const numOfUnProcessingWidget = total - numOfProcessedWidget;

  function handleProcessWidget(){
    if(numOfProcessedWidget < total){
      setNumOfProcessingWidget(numOfProcessedWidget + 1);
    }
  }

  function handleRevertWidget(){
    console.log('ff',numOfProcessedWidget);
    if(numOfProcessedWidget > 0){
      setNumOfProcessingWidget(numOfProcessedWidget -1);
    }
  }
  return(
    <div className={css.widget_wrapper}> 
      <div className={css.inbox}>
        { range(numOfUnProcessingWidget).map((itemNum) =>{
          return (
            <div 
              key={itemNum}
              className="widget"
            />
          );
        })}
      </div>
      <div className={css.actions}>
        <button onClick={handleProcessWidget}>
          <VisuallyHidden>Process widget</VisuallyHidden>
          <ChevronDown color='white' />
        </button>
        <button onClick={handleRevertWidget}>
          <VisuallyHidden>Revert widget</VisuallyHidden>
          <ChevronDown color='white' />
        </button>
      </div>

      <div className={css.outbox}>
        {range(numOfProcessedWidget).map((itemNum) =>{
          return(
            <div key={itemNum} className={css.widget} />
          )
        })}
      </div>

    </div>
  );
}

function Toggle({
      value,
      onChange,
      ...delegated   
    }){
  return(
    <button
      type='button'
      role="switch"
      aria-checked={value}
      className={css.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
     <motion.span
      className={css.ball}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
      animate={{
        x: value ? '100%' : '0%'
      }}
      // style={{
      //   transition: 'transform 300ms',
      //   transform: `translateX(${value ? '100%' : '0%'})`
      // }}
     />  
    </button>
  );
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

function FlexDemo(){
  const [flexDirection,setFlexDirection] = React.useState('row');
  const [justifyConent,setJustifyContent] = React.useState('flex-start');
  const [alignItems,setAlignItems] = React.useState('stretch');
  return (
    <section className={css.wrapper2}>
      <div className={css.demoArea}
        style={{
          flexDirection,
          justifyConent,
          alignItems
        }}
      >
        {ITEMS.map((item) =>(
          <motion.div
            layout={true}
            key={item.id}
            className={css.flexItem}
          >
            <motion.div 
            layout='position'
            >
              {item.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className={css.controls}>
          <SelectControl
            label="flex-direction"
            value={flexDirection}
            onChange={(event) => setFlexDirection(event.target.value)}
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
          </SelectControl>
          <SelectControl
          label="justify-content"
          value={justifyConent}
          onChange={(event) =>
            setJustifyContent(event.target.value)
          }
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </SelectControl>
        <SelectControl
          label="align-items"
          value={alignItems}
          onChange={(event) => setAlignItems(event.target.value)}
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </SelectControl>
      </div>
    </section>
  );
}

function SelectControl({label,value,onChange,...delegated}){
  const id = React.useId()
  console.log({...delegated});
  return(
    <div className={css.SelectControl}>
      <label htmlFor={id}>{label}</label>
      <select
        className={css.select}
        value={value}
        onChange={onChange}
        {...delegated}
      />
    </div>
  );
}

function Students({infotest}){
  console.log(infotest);
  return(
    <h1>Welcome to College {infotest.name}</h1>
  );
}

function Avatar(props) {
  let checkInfo = {...props}
  return <>
  <h1>Shall We Begin {checkInfo.person}</h1>
    {/* <h1>Shall We Begin {person}</h1>
    <h2>Gender : {gender}</h2> */}
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="test"
     
    />
  </>
}

function Profile(props){
  return (
    <Avatar {...props}/>
  )
  
 
  // return <Students {...infotest} />
}



const ITEMS = [
  {
    id: '001',
    label: 'hello',
  },
  {
    id: '002',
    label: 'to',
  },
  {
    id: '003',
    label: 'the'
  },
  {
    id: '004',
    label: 'World'
  },
];


function Card({children}){
  return(
    <div className={css.card}>
        {children}
    </div>
  );
}



export default FramerMotionLearnings;
