import React, { useState } from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer/Spacer';
 import { ChevronDown, ChevronRight,ChevronUp } from "react-feather";

function MoviePoster({imgsrc,movietile}) {
  return (
    <>
      <Wrapper>
        <ImageFit>
            <img 
              src={imgsrc} 
              alt="mobileposter" 
              className="movieimg" 
              />
         </ImageFit>
        <MovieGeneralInfo>
           <MovieTitle>{movietile}</MovieTitle>
          <FlexRow>
            <MovieLeftSection>
                <MovieGenreWrapper>
                  {CompleteGenre.map((index,genre) => (
                    <MovieGenre key={index}>{index}</MovieGenre>
                  ))}
                 
              </MovieGenreWrapper>
               <MoviePlotInfo />
            </MovieLeftSection>
            
             <MovieRightSection>
                <DirectorSection />
                 <Spacer size={10} />
                <WriterSection />
                <Spacer size={20} />
                <StarSection />
             </MovieRightSection>
          </FlexRow>
          
        </MovieGeneralInfo>
      </Wrapper>
    </>
  );
}


function MoviePlotInfo(){
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return(
    <>
      <Mwrapper>
       {isExpanded ? (
          // Full plot when expanded
          `Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.`
        ) : (
          // Short plot when collapsed
          `Jake Sully and Ney'tiri have formed a family and are doing everything to stay together.`
        )}
    </Mwrapper>
     {/* Use the styled component for the "Read More" section */}
      <ReadMoreWrapper onClick={toggleExpansion}>
        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
        <div>
          {isExpanded ? <ChevronUp color="orange" size={18} /> : <ChevronDown color="orange" size={18} />}
        </div>
      </ReadMoreWrapper>
    </>
  );
}

function DirectorSection(){
  return (
    <>
      <DirectorInfo>
        <div>
          <DirectorNameTitle>Director</DirectorNameTitle>
          <DirectorName>James Cameron</DirectorName>
        </div>
          <ChevronRight color="orange" size={18} />
        </DirectorInfo>
    </>
  );
}

function WriterSection(){
  return (
    <>
      <DirectorInfo>
        <div style={{marginTop: '20px'}}>
          <DirectorNameTitle>Writer</DirectorNameTitle>
          <DirectorName> 
            <ul>
              <li>Testing 1</li>
               <li>Testing 2</li>
                <li>Testing 3</li>
            </ul>
          </DirectorName>
        </div>
          <ChevronRight color="orange" size={18} />
        </DirectorInfo>
    </>
  );
}

function StarSection(){
  return (
    <>
      <DirectorInfo>
        <div>
          <DirectorNameTitle>Stars</DirectorNameTitle>
          <DirectorName> 
            <ul>
              <li>Rajini</li>
               <li>Kamal</li>
                <li>Vijay</li>
            </ul>
          </DirectorName>
        </div>
          <ChevronRight color="orange" size={18} />
        </DirectorInfo>
    </>
  );
}


const Mwrapper = styled.p`
 color: var(--color-white);
 margin-top: 20px;
 font-size: 1rem;
`
const ReadMoreWrapper = styled.div`
  color: var(--color-blue-300);
  font-size: 1rem;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;


const DirectorNameTitle = styled.div`
  color: var(--color-blue-300);
  font-size: 1.5rem;
`

const DirectorName = styled.div`
  color: white
`

const MovieGenreWrapper = styled.div`
  display: flex;
  gap: 10px;

`


const Ratings = styled.div`
  display: flex;
  align-items: center;
`

const DirectorInfo = styled.div`
  width: 240px;
  outline:  2px solid hotpink ;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieGenreStuff = styled.div`

`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  /* outline: 2px solid red; */
  width: 100%;
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
