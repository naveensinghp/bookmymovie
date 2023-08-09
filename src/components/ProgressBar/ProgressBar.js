import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({value,size}) =>{
  return <Wrapper>
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar style={{'--width': value + '%'}} />
    </div>
</Wrapper>
}


const Wrapper = styled.div`
  background-color: #c2c0c0;
  box-shadow: inset 0px 2px 4px #9E9E9E;
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: hotpink;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
