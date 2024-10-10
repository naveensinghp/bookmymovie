import React from 'react';
import styled from 'styled-components';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';


function MoviePoster({imgsrc,movietile}) {
  return (
    <>
      <Wrapper>
        <ImageFit>
          <img src={imgsrc} alt="mobie" className="movieimg" />
        </ImageFit>
         <MovieGeneralInfo>
              <MovieTitle>{movietile}</MovieTitle>
              <Spacer size={50} />
              <div style={{display: 'flex', gap:'20px'}}>
              {range(4).map((num) => (
                 <MovieGenere>Action</MovieGenere>
              ))}
              </div>
              <MoviePlot>
                Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
              </MoviePlot>
         </MovieGeneralInfo>
      </Wrapper>
    </>
  );
}


const MoviePlot = styled.div`
  color: white;
`

const moviegenere = ['Action','Adventures']

const MovieGeneralInfo = styled.div`
  
`
const MovieGenere = styled.div`
  background: #515151;
  width: 200px;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  color: white;
  font-weight: bold;
`
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`

const ImageFit = styled.div`
  width: 250px;
`

const MovieTitle = styled.h1`
  font-size: 2rem;
  color: white;
`

export default MoviePoster;
