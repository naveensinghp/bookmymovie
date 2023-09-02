import React from 'react';
import styled from 'styled-components';

function Logo() {
  return <Wrapper>
     <img src="assets/logo.png" alt="bookmymovielogo" width={200}/>
  </Wrapper>;
}

export default Logo;

const Wrapper = styled.div`
  cursor: pointer;
`;
