import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import {chevronDown} from 'react-icons-kit/feather/chevronDown'
import { Icon } from 'react-icons-kit'
import { getDisplayedValue } from './Select.helper';

const Select = ({label,value,onchange,children}) => {
   const displayedValue = getDisplayedValue(value,children);
  // console.log(displayedValue);
  return(
    <Wrapper>
      <NativeSelect value={value} onChange={onchange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px'}}>
          <Icon size={24} icon={chevronDown} />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  )
};



const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationBit = styled.div`
color: ${COLORS.gray[600]};
background-color: ${COLORS.blue};
padding: 12px 16px;
padding-right: 52px;
font-size: ${16 / 16}rem;
border-radius: 8px;

${NativeSelect}:focus + &{
  outline: 1px dotted #212121;
  outline: 5px auto --webkit-focus-ring-color;
}
${NativeSelect}:hover + &{
  color: yellow;
}
`;

const IconWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 10px;
margin: auto;
width: var(--size);
height: var(--size);
pointer-events: none;
`;







export default Select;
