import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X,ChevronRight,ChevronLeft } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
function MovieCalendar(){
    let newDate = new Date()
    let date = newDate.getDate();
    
    return(
        <>
            <Header/>
            <TextLink  href="/">Go Home</TextLink>
            {/* <h1>Movie Calendar Page</h1> */}
            <Wrapper>
                <Close>
                    <Link href="/">
                        <X size={32} color="white" />
                    </Link>
                </Close>
                {/* MOVIE BANNER GOESHERS */}
                <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00025768.jpg" alt="banner" />
                
                <MoviePoster>
                    <Showwrapper>
                        <Showstuff> ShowTimes</Showstuff>
                        <Showstuff> synopsis</Showstuff>
                    </Showwrapper>
                    <TimingStuff>
                        {/* <Day>
                            <ChevronLeft />
                                <div>Sun</div>
                                <div>{date}</div>
                            <ChevronRight />
                        </Day> */}
                        <div style={{display: 'flex',gap: '20px',color:'white',fontSize: '1rem',justifyContent: 'center',alignItems: 'center'}}>
                            <ChevronLeft />
                                <div style={{display: 'flex',flexDirection: 'column',fontSize: '1.1rem'}}>
                                    <h4>Sun</h4>
                                    <h5>19</h5>
                                </div>
                                
                            <ChevronRight />
                        </div>
                    </TimingStuff>
                </MoviePoster>
            </Wrapper>
        </>
    );
}



export default MovieCalendar;

const MoviePoster = styled.div`
`
const Close = styled.div`
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 130px;
`;

const Showwrapper = styled.div`
    display: flex;
    justify-content: center;
    background: var(--color-black-400);
`;

const Wrapper = styled.div`
  padding-top: 1%;
  background: hotpink;
  margin-left: 5%;
  margin-right: 5%;
`;

const Showstuff = styled.div`
    cursor: pointer;
    text-transform: uppercase;
    padding: 20px;
    font-size: 1.1rem;
    font-weight: bolder;
    color: var(--color-white);
    background: var(--color-black-500);
    &:hover{
        color: var(--color-yellow);
    }
`;

const TimingStuff = styled.div`
    padding: 20px;
    display: flex;
`;
const Day = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1rem;
    font-weight: bold;
`;