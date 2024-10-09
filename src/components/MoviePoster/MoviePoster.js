import React from 'react';
import styled from 'styled-components';

function MoviePoster({imgsrc,movietile}) {
  return (
    <>
      <Wrapper>
        <ImageFit>
          <img src={imgsrc} alt="mobie" className="movieimg" />
        </ImageFit>
      </Wrapper>
     <MovieTitle>{movietile}</MovieTitle>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`

const ImageFit = styled.div`
  width: 250px;
`

const MovieTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
`

export default MoviePoster;
