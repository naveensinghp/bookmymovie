import React from 'react';
import styled from 'styled-components';

function ChooseSeatCountAlert() {
  return (<Wrapper>
      <div>How Many Seat</div>
  </Wrapper>);
}

export default ChooseSeatCountAlert;


const Wrapper = styled.div`
    background: white;
    width: 400px;
    font-size: 12px;
    font-weight: bold;
`;