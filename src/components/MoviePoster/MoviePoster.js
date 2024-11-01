import React from 'react';
import styled from 'styled-components';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import {chevronDown} from 'react-icons-kit/feather/chevronDown'
import { Icon } from 'react-icons-kit'
import Button from '../Button';


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
                    {CompleteGenre.map((genre) => (
                      <MovieGenre>{genre}</MovieGenre>
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
                      </div>
                    
                    <MoviePlot>
                      Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
                    </MoviePlot>
                    <Spacer size={50} />
                    {/* <div style={{width: '200px' }}>
                      <Button size={'small'}>Read More </Button>
                    </div>
                    */}
                    {/* 
                    <ReadMore>
                      Read More
                      <Icon size={18} icon={chevronDown} color={'red'} />
                    </ReadMore> */}
                    </MovieLeftSection>
                    <MovieRightSection>
                       <DirectorInfo>
                          <h2>Director</h2>
                          <span>James Cameron</span>
                       </DirectorInfo>
                    </MovieRightSection>
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
  border: outline solid;
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
  gap: 20px;
`

const ImageFit = styled.div`
  width: 350px;
  /* outline: 2px solid red; */
`

const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
`

const ReadMore = styled.div`
  color: white;
`;

export default MoviePoster;
