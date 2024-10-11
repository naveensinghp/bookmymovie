import React from 'react';
import styled from 'styled-components';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import {chevronDown} from 'react-icons-kit/feather/chevronDown'
import { Icon } from 'react-icons-kit'


function MoviePoster({imgsrc,movietile}) {
  return (
    <>
      <Wrapper>
        <ImageFit>
          <img src={imgsrc} alt="mobie" className="movieimg" />
        </ImageFit>
         <MovieGeneralInfo>
              {/* <MovieTitle>{movietile}</MovieTitle>
              <div style={{display: 'flex',flexDirection: 'column'}}>
              <Spacer size={50} />
              <div style={{display: 'flex', gap:'20px'}}>
              {CompleteGenre.map((genre) => (
                 <MovieGenre>{genre}</MovieGenre>
              ))}
              </div>
              <MoviePlot>
                Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
              </MoviePlot>
              <Spacer size={50} />
              <ReadMore>
                Read More
                <Icon size={18} icon={chevronDown} color={'red'} />
              </ReadMore>
              </div> */}
              <FlexColumn>
                <MovieTitle>{movietile}</MovieTitle>
                <MovieGenreStuff>
                  <FlexRow>
                  <MovieLeftSection>
                  {CompleteGenre.map((genre) => (
                      <MovieGenre>{genre}</MovieGenre>
                    ))}
                    </MovieLeftSection>
                    <MovieRightSection>
                       <h1>Testing</h1>
                    </MovieRightSection>
                  </FlexRow>
                </MovieGenreStuff>
              </FlexColumn>
         </MovieGeneralInfo>
      </Wrapper>
    </>
  );
}

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

`;

{/* <FlexColumn>
    <MovieName></MovieName>
    <MovieGenreStuff>
        <FlexRow>
            <MovieLeftSection>
            </MovieLeftSection>
            <MovieRightSection>
            </MovieRightSection>
        </FlexRow>
    </MovieGenreStuff>
</FlexColumn> */}


const MoviePlot = styled.div`
  color: white;
`

const CompleteGenre = ['Action','Adventures','Thriller','Fantasy']

const MovieGeneralInfo = styled.div`
  outline: 2px solid red;
`
const MovieGenre = styled.div`
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
  outline: 2px solid red;
`

const MovieTitle = styled.h1`
  font-size: 2rem;
  color: white;
`

const ReadMore = styled.div`
  color: white;
`;

export default MoviePoster;
