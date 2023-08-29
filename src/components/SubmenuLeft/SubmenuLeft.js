import React from 'react';
import { home } from 'react-icons-kit/icomoon/home'
import { Icon } from 'react-icons-kit'
import styled from 'styled-components';


function SubmenuLeft() {
  const[isHome,setHome] = React.useState(true);
  return(
    <>
      <div className="threemenu">
        <Wrapper>
          <Ul>
            {
              isHome ? <li  style={{ position: 'relative',left:'10px',top:'-3px' }}> 
              <Icon style={{color: 'white'}} icon={home} />
            </li> : ''
            }
            <li>IMAX</li>
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
  /* background: hotpink; */
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 11px;
  padding-left: 100px;
`;