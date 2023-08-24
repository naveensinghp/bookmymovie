import React from 'react';
import styled from 'styled-components';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium:{
    height: 12,
    padding: 0,
  },
  large:{
    height: 16,
    padding: 4,
  }
} 

const ProgressBar = ({value,size}) =>{

  const styles = STYLES[size];
  if(!styles){
    throw new Error(`Unknown Size Passed to ProgressBar: ${size}`);
  }
  return <Wrapper>
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
      }}
    >
      <Bar 
        style={{
          '--width': value + '%',
          '--height': styles.height + 'px'
        }} />
    </div>
</Wrapper>
}


const Wrapper = styled.div`
  background-color: #c2c0c0;
  box-shadow: inset 0px 2px 4px #9E9E9E;
  border-radius: 4px;
  overflow: hidden;
  padding: var(--padding);
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  height: 8px;
  background-color: hotpink;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
