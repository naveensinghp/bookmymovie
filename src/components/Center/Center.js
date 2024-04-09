import React from 'react';
import styled from 'styled-components';

function Center({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Center;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-size: 1.4rem;
  color: white;
`;