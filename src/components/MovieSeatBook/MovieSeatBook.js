import React, { useState } from 'react';
import styled from 'styled-components';
import { SEATSET, alphabets, seatNumber } from "../../data";

function MovieSeatBook() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Column>
        {seatNumber.map((data) => (
          <Wrapper key={data.id}>
            {data.seat}
            {data.seatno.map((seatno, index) => {
              const rowindex = `${data.seat}-${index}`;
              return (
                <SeatNum
                  key={rowindex}  // Ensure unique key for each SeatNum
                  variant={seatno}
                  active={rowindex === activeIndex} // Keep it boolean for logic
                >
                  {seatno}
                </SeatNum>
              );
            })}
            <div>{data.seat}</div>
          </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 20px;
`;

const SeatNum = styled.button`
  width: 35px;
  height: 35px;
  font-size: 12px;
  background-color: ${props => props.active ? '#ffcb05' : 'white'};
  border: 1px solid green;
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
    } else {
      return 'visible';
    }
  }};
  
  &:hover {
    background-color: #ffcf14;
  }
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
