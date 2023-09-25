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
  min-height: 32px;
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: bold;
  border-radius: 0.25rem;
  padding: 0.3rem 0.9rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  font-size: 1rem;
  letter-spacing: 0.6px;
  cursor: pointer;
`;

export default Button;

