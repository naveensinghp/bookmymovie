import React from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer/Spacer';
import { ChevronDown, chevronDown } from "react-feather";


function MoviePoster({imgsrc,movietile}) {
  return (
    <>
      <Wrapper>
        <ImageFit>
          <img src={imgsrc} alt="mobie" className="movieimg" />
        </ImageFit>
         <MovieGeneralInfo>
              <FlexColumn>
                <MovieTitle>{movietile}</MovieTitle>
                <MovieGenreStuff>
                <Spacer size={40} />
                  <FlexRow>
                  <MovieLeftSection>
                    <div style={{display: 'flex',gap: '10px'}}>
                    {CompleteGenre.map((index,genre) => (
                        <MovieGenre key={index}>{index}</MovieGenre>
                    ))}
                    </div>
                    <Spacer size={10} />
                    <div style={{display: 'flex',gap: '10px'}}>
                      <Ratings>
                        <img src="assets/imdb.png" width={50} alt="imdb" />
                        <div style={{color: 'white',fontSize: '12px'}}> 7.6 / 10</div>
                      </Ratings>
                      <Ratings>
                        <img src="assets/imdb.png" width={50} alt="imdb" />
                        <div style={{color: 'white',fontSize: '12px'}}> 7.6 / 10</div>
                      </Ratings>
                      <Ratings>
                        <img src="assets/imdb.png" width={50} alt="imdb" />
                        <div style={{color: 'white',fontSize: '12px'}}> 7.6 / 10</div>
                      </Ratings>
                      </div>
                    <MoviePlot>
                      Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
                    </MoviePlot>
                    <Spacer size={50} />
                    <ReadMore>
                      Read More
                        <ChevronDown color="orange" size={18} />
                    </ReadMore>
                    </MovieLeftSection>
                    {/* <MovieRightSection>
                       <DirectorInfo>
                          <h2>Director</h2>
                          <span>James Cameron</span>
                       </DirectorInfo>
                    </MovieRightSection> */}
                  </FlexRow>
                </MovieGenreStuff>
              </FlexColumn>
         </MovieGeneralInfo>
      </Wrapper>
    </>
  );
}


const Ratings = styled.div`
  display: flex;
  align-items: center;
`

const DirectorInfo = styled.div`
  

`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieGenreStuff = styled.div`

`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MovieLeftSection = styled.div`
  /* display: flex; */
`;

const MovieRightSection =styled.div`
 outline: 2px solid yellow;
`;



const MoviePlot = styled.div`
  color: white;
`

const CompleteGenre = ['Action','Adventures','Thriller','Fantasy']

const MovieGeneralInfo = styled.div`
  outline: 2px solid red;
`
const MovieGenre = styled.div`
  background: #292d37;
  font-size: 12px;
  width: 95px;
  text-align: center;
  border-radius: 20px;
  padding: 3px;
  color: #84858a;
  font-weight: bold;
  height: 25px;
`
const Wrapper = styled.div`
  display: flex;
  gap: 4rem;
`

const ImageFit = styled.div`
  width: 500px;
  /* outline: 2px solid red; */
`

const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
`

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--color-blue-300);
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export default MoviePoster;
