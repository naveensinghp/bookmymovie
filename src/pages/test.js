import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../components/Button';
import { range } from "../utils";
import { 
  SEATSET,
  alphabets,
  seatNumber
} from "../data";

import { FavouriteColorContext } from '../components/App/App';
import Modal from '../components/Modal/Modal';
import useToggle from '../hooks/use-toggle';
import Center from '../components/Center/Center';


export default function Test(){


    return<>
      {/* */}
      <Center>
        <ModalTest />
      </Center>
        {/* <LoggedInBanner
            type="success"
            user={EXAMPLE_USER}
          >
            Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
        </LoggedInBanner> */}
        <Column>
        {/* <Row>
          {range(11).map((num) => (
              <SeatNum>{num}</SeatNum>
           ))}
        </Row> */}
        <h3>Budget (59.61)</h3>
         {seatNumber.map((data) => (
            <div 
              style={{
                display: 'flex',
                gap: '16px',
                paddingTop: '20px'
              
              }}
            >
              <div>{data.seat}</div>
                {data.seatno.map((num) => (
                  <SeatNum num={num}/>
                ))}
               <div>{data.seat}</div>
            </div>
           ))}
      </Column>
    </>

   function ModalTest(){
    const [isModalOpen, toggleIsModalOpen] = useToggle(false);
    return<>
      <Modal
        title="Log in"
        isOpen={isModalOpen}
        handleDismiss={() => toggleIsModalOpen(false)}
      >
        <LoginForm />
      </Modal>
      <button onClick={toggleIsModalOpen}>Log in</button>
    </>
   }

   function LoginForm(){
    return(
      <form>
        <div>
          <label>
            Email
          </label>
          <input
          type="email"
          />
          <button>Submit</button>
        </div>
      </form>
    );
   }

  function SeatNum({num}){
    // console.log("Hel",num);
    return(
      <>
      {num && num > 0 ? <SeatNums key={num}> {num}</SeatNums> : <TransparentButton />}
       
      </>
    );
  }
  function Banner({type, children}){
    const backgroundColor = type === 'success' ? 'green': 'red';
   
    return (
        <div
          style={{padding: '16px',textAlign: 'center', borderRadius: '4px',background: backgroundColor}}
        >
            {children}
        </div>
    );
  }

  function BlackFridaySale({
    salesStartDate,
    salesEndDate,
    type,
    children
  }){
    return(
        <Banner
         type={type}
        >{children}</Banner>
    );
  } 

  function LoggedInBanner({type, user, children}){
    if(!user || user.registrationStatus === 'unverified'){
        return null;
    }
    return(
        <Banner
         type={type}
        >{children}</Banner>
    );
  }

  function Slider(){
    return (
      <div>
        
      </div>
    );
  }
   
}


const SeatRow = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  outline: 2px solid hotpink;
`;
const Column = styled.div`
  background-color: #333333;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 2px solid red;
`;

const TransparentButton = styled.button`
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    
`;

const SeatNums = styled.button`
    width: 35px;
    height: 35px;
    background-color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    /* &:hover{
        background-color: #ffcf14;
        translate: 0px -16px;
        transition: 200ms linear 50ms;
    } */
`;






