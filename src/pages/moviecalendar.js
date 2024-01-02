import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X,ChevronRight,ChevronLeft } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
import { range } from "../utils";

function MovieCalendar(){
    // From 
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
                <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00025768.jpg" alt="banner" />
                <MovieTitle>
                    <h1>Leo (U/A)</h1>
                    <h4>(U/A) • 2h 44m • Thursday, October 19, 2023 • TAMIL • ACTION</h4>
                </MovieTitle>
                <Showwrapper>
                        <Showstuff> ShowTimes</Showstuff>
                        <Showstuff> synopsis</Showstuff>
                </Showwrapper>
                <ShowTimeSlot>

                </ShowTimeSlot>
            </Wrapper>
        </>
    );
}

export default MovieCalendar;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-left: 15%;
  padding-right: 15%;
`;

const ShowTimeSlot = styled.div`
  border-bottom: 1px solid white;
  /* background-color: green; */
  height: 20px;

`;

const Monthrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    color: white;
    font-size: 1rem;
    padding: 15px 40px;
`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    cursor: pointer;
    width: 200px;
    text-align: center;
    &:hover{
        background-color: red;
    }
`;

const MovieTitle = styled.div`
    position: absolute;
    font-size: 1rem;
    color: white;
    top: 23em;
    padding: 20px;

`;


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
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    gap: 20px;

    &:hover {
        background-color: red;
    }
`;