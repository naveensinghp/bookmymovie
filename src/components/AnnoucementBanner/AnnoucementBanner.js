import React from 'react';
import styled from 'styled-components';

function AnnoucementBanner() {
  return <Wrapper>
      <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" alt="banner" />
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
`;
export default AnnoucementBanner;
