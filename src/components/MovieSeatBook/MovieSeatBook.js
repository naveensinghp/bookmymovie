import React, {useState} from 'react';
import styled from 'styled-components';
import { 
  SEATSET,
  alphabets,
  seatNumber
} from "../../data";


function MovieSeatBook() {
  const [activeIndex, setActiveIndex] = useState(null);
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
                {data.seatno.map((seatno,index) => {
                   const rowindex = `${data.seat}-${index}`
                   const clickedSeat = `${data.seat}${''}${seatno}`
                  return (
                    <SeatNum 
                      variant={seatno}
                      active={rowindex === activeIndex}
                    >{seatno}</SeatNum>
                  
                  )
                })}
               <div>{data.seat}</div>
            </div>
           ))}
      </Column>
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

const SeatNum = styled.button`
    width: 35px;
    height: 35px;
    /* background-color: white; */
    background-color: ${props => props.active ? '#ffcb05' : 'white'}; 
    border: 1px solid ${props => props.active ? '#ffcb05' : '#7a7a7a'};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    visibility: ${props => {
    if (props.variant.includes('x')) {
      return 'hidden';
    }else {
        return 'visible'; 
    } 
    }}; 
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