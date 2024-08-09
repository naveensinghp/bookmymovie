import React from 'react';
import styled from 'styled-components';
import { 
  SEATSET,
  alphabets,
  seatNumber
} from "../../data";


function MovieSeatBook() {
  return (
    <>
      <Column>
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
  );
}

function SeatNum({num}){
  return(
    <>
    {num && num > 0 ? <SeatNums key={num}> {num}</SeatNums> : <TransparentButton />}
    </>
  );
}

export default MovieSeatBook;


const Column = styled.div`
  background-color: #333333;
  height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 2px solid red;
  flex-flow: column-reverse;
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