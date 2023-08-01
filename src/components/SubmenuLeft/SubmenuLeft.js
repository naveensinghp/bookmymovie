import React from 'react';
import { home } from 'react-icons-kit/icomoon/home'
import { Icon } from 'react-icons-kit'
import styled from 'styled-components';


function SubmenuLeft() {
  return(
    <>
      <div className="threemenu">
        <Wrapper>
          <Icon style={{color: 'white'}} icon={home} />
          <Ul>
            <li>MAX</li>
            <li>4DX</li>
            <li>Playhouse</li>
            <li>GOLD</li>
            <li>P[XL]</li>
            <li>ONYX</li>
          </Ul>
        </Wrapper>
      </div>;
    </>
  )
}

export default SubmenuLeft;


const Wrapper = styled.div`
  background: hotpink;
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-weight: bold;
  font-size: 12px;
`;