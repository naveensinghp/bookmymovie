import styled from 'styled-components';
import React from 'react';
import Button from '../components/Button';
import { range } from "../utils";
import { 
  SEATSET,
  alphabets
} from "../data";

export default function Test(){
const EXAMPLE_USER = {
    name: 'sayan',
    registrationStatus: 'verified',
} 
    return<>
        {/* <LoggedInBanner
            type="success"
            user={EXAMPLE_USER}
        >
            Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
        </LoggedInBanner> */}

        <Column>
          <Row>
             <SeatRow>S</SeatRow>
              {range(11).map((num) => (
                <SeatNum>{num}</SeatNum>
                ))}
                <div style={{display:'flex'}}></div>
                {range(11).map((num) => (
                  <SeatNum>{num}</SeatNum>
                ))}
               <SeatRow>S</SeatRow>
          </Row>
          
        </Column>
    </>

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
  function VolumeSlider(){

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

const SeatNum = styled.button`
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
    &:hover{
        background-color: #ffcf14;
        translate: 0px -16px;
        transition: 200ms linear 50ms;
    }
`;






