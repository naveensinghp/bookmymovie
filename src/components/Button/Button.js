import React from 'react';
import styled from 'styled-components';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + "rem",
    '--padding': "8px 24px",
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + "rem",
    '--padding': "16px 24px",
  },
  large: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 21 / 16 + "rem",
    '--padding': "20px 36px",
  },
  
}

function Button({variant,size,children}) {
  const styles = SIZES[size];
  let Component;
  if(variant === 'fill'){
    Component = FillButton
  }else{
    Component = OutlineButton
  }
  return(
    <>
    <Component style={styles}>
      {children}
    </Component>
    </>
  );
  
  
}

const ButtonElem = styled.button`
  min-height: 32px;
  background-color: var(--color-white);
  color: var(--color-black);
  font-weight: bolder;
  border-radius: 0.25rem;
  /* padding: 0.3rem 0.9rem; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  /* font-size: 0.9rem; */
  font-size: var(--fontSize);
  letter-spacing: 0.6px;
  cursor: pointer;
`;

const FillButton = styled(ButtonElem)`
  background-color: 'hotpink';
  color: 'white';
`
const OutlineButton = styled(ButtonElem)`
  background-color: 'red';
  color: 'white';
  border: 2px solid
`
const GhostButton = styled(ButtonElem)``


export default Button;

