import React from 'react';
import styled from 'styled-components';


function Button({children}) {
  return(
    <>
    <Wrapper>
      {children}
    </Wrapper>;
    </>
  );
  
  
}

const Wrapper = styled.button`
  background-color: var(--color-white);
  color: #1a1a1a;
  font-weight: 700;
  border-radius: 0.25rem;
  padding: 0.4rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  font-size: 1rem;
  letter-spacing: 0.6px;
  cursor: pointer;
`;

export default Button;

