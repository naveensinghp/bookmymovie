import React from 'react';
import styled from 'styled-components';
import { getMoviePosters } from '../../data';


function AnnoucementBanner() {
  return <Wrapper>
    {getMoviePosters.map((data) => 
       <img 
        key={data.id}
        src={data.img} 
        style={{ width: '100%' }} 
        alt={data.title} 
        />
    )}
      
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
`;
export default AnnoucementBanner;
