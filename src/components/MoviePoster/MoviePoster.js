import React from 'react';
import styled from 'styled-components';

function MoviePoster() {
  return (
    <Wrapper>
      <ImageFit>
        <img src="assets/avatar.jpeg" alt="mobie" width={294} height={230} />
      </ImageFit>
      <h1>Avatar Way of Water</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ImageFit = styled.div`
  background: red;
  height: 296px;
  width: 240px;
  border-radius: 20px;

`

export default MoviePoster;
