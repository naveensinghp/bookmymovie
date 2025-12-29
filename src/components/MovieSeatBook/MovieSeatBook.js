import React, { useState } from 'react';
import styled from 'styled-components';
import { SEATSET, alphabets, seatNumber } from "../../data";

function MovieSeatBook() {
  const [activeSeats, setActiveSeats] = useState(new Set());

  const toggleSeat = (seatId) => {
    setActiveSeats(prev => {
      const next = new Set(prev);
      next.has(seatId) ? next.delete(seatId) : next.add(seatId);
      return next;
    });
  };

  return (
    <Column>
      {seatNumber.map((row) => (
        <Wrapper key={row.id}>
          {row.seat}
          {row.seatno.map((seatno, index) => {
            const seatId = `${row.seat}-${index}`;
            const isActive = activeSeats.has(seatId);

            return (
              <SeatNum
                key={seatId}
                variant={seatno}
                active={isActive}
                data-active={isActive}
                onClick={() => toggleSeat(seatId)}
              >
                {seatno}
              </SeatNum>
            );
          })}
          <div>{row.seat}</div>
        </Wrapper>
      ))}
    </Column>
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
  border-radius: 4px;
  border: 1px solid green;
  cursor: pointer;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ active }) => (active ? '#ffcb05' : 'white')};
  color: black;

  /* 🎯 Single, predictable animation system */
  transform: ${({ active, variant }) => {
    if (variant.includes('x')) return 'scale(0)';
    if (active) return 'scale(1.12)';
    return 'scale(1)';
  }};

  opacity: ${({ variant }) => (variant.includes('x') ? 0 : 1)};
  pointer-events: ${({ variant }) =>
    variant.includes('x') ? 'none' : 'auto'};

  transition:
    transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 180ms ease,
    opacity 200ms ease;

  /* &:hover {
    background-color: ${({ active }) =>
      active ? '#ffcb05' : '#ffcf14'};
  } */

  /* Pressed state (does NOT fight React state) */
  &:active {
    transform: ${({ active }) =>
      active ? 'scale(1.05)' : 'scale(0.95)'};
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
