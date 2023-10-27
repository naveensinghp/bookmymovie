import React from 'react';
import styled from 'styled-components';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + "rem",
    '--padding': "8px 12px",
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + "rem",
    '--padding': "12px 20px",
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
    <Component style={styles} as="a">
      {children}
    </Component>
    </>
  );
  
  
}

const ButtonBase = styled.button`
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
  &:focus {
    outline-color: hotpink;
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: 'hotpink';
  color: 'white';
`
const OutlineButton = styled(ButtonBase)`
  background-color: 'red';
  color: 'white';
  border: 2px solid
`
const GhostButton = styled(ButtonBase)``


export default Button;

