import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X,ChevronRight,ChevronLeft } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
import { range } from "../utils";
import useIsonScreen from "../hooks/use-is-onscreen";
import Button from "../components/Button";



export default function MovieCalendar(){
    const elementRef = React.useRef();
    const[isShowTime,setShowTime] = React.useState(false);
    React.useEffect(()=>{
        if(isShowTime){
            console.log("REACTED",isShowTime)
        }
    },[isShowTime])
    return(
        <>
            <Header/>
            <TextLink  href="/">Go Home</TextLink>
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
                    <ShowTime />    
                </MoviePoster>
            </Wrapper>
        </>
    );

    function ShowTime(){
        return(
            <Showwrapper>
                        {/* <Showstuff> ShowTimes</Showstuff>
                        <Showstuff> synopsis</Showstuff> */}
                <TimingStuff>
                    {range(4).map((num) =>( 
                    <Monthrow>
                        <Month>
                            <h4 style={{fontSize: '1.1rem'}}>Jan</h4>
                            <h5 style={{fontSize: '1.4rem'}}>19</h5>
                            <h5 style={{fontSize: '1rem'}}>Today</h5>
                        </Month>
                    </Monthrow>
                        ))}
                </TimingStuff>
            </Showwrapper>
        );
    }
}




const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
`;

const MovieTitle = styled.div`
    position: absolute;
    font-size: 1rem;
    color: white;
    top: 19em;
    padding: 20px;
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

`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    cursor: pointer;
    width: 200px;
    text-align: center;
    background-color: #878787;
    /* &:hover{
        background-color: red;
    } */
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
    display: flex;
    gap: 20px;
`;
const Day = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    gap: 20px;
    /* &:hover {
        background-color: red;
    } */
`;