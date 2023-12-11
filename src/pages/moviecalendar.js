import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X,ChevronRight,ChevronLeft } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
import { range } from "../utils";

function MovieCalendar(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let newDate = new Date()
    let date = newDate.getDate();
    console.log("tt",new Date().toUTCString());
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
                {/* MOVIE BANNER GOESHERS */}
                <div>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00025768.jpg" alt="banner" />
                    <MovieTitle>
                        <h1>Leo (U/A)</h1>
                        <h4>(U/A) • 2h 44m • Thursday, October 19, 2023 • TAMIL • ACTION</h4>
                        <h5>Thalapathy Vijay, Sanjay Dutt, Trisha</h5>
                    </MovieTitle>
                </div>
                
                
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


                        <div style={{
                                display: 'flex',
                                
                                gap: '50px',
                                color:'white',
                                fontSize: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '15px 40px'
                                
                                }}>
                            
                             <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '1.1rem',
                                        }}>
                                    <h4 style={{fontSize: '1.5rem'}}>Sun</h4>
                                    <h5 style={{fontSize: '1.7rem'}}>19</h5>
                                </div>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '1.1rem'
                                        }}>
                                    <h4 style={{fontSize: '1.5rem'}}>Mon</h4>
                                    <h5 style={{fontSize: '1.7rem'}}>20</h5>
                                </div>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '1.1rem'
                                        }}>
                                    <h4 style={{fontSize: '1.5rem'}}>Tue</h4>
                                    <h5 style={{fontSize: '1.7rem'}}>21</h5>
                                </div>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '1.1rem',
                                        cursor: 'pointer'
                                        }}>
                                    <h4 style={{fontSize: '1.5rem'}}>Sun</h4>
                                    <h5 style={{fontSize: '1.7rem'}}>19</h5>
                                </div>
                           
                        </div>
                    </TimingStuff>
                </MoviePoster>
            </Wrapper>
        </>
    );
}



export default MovieCalendar;

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

const Wrapper = styled.div`
  padding-top: 1%;
  background: hotpink;
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 10px 10px;
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