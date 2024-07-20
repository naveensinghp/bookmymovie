import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
import { COLORS } from "../constants";
import {search} from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'
import { 
        SEATSET, 
        dummyShowTime,
        movieTheatres,
        availableShowTime    } from "../data";

export default function MovieCalendar(){
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
                    <SearchCinemas /> 
                    <MovieTheatre />
                    <br/>
                    {/* <br/><br/><br/><br/> */}
                    {/* <LinkButton href="/add-transaction">Add Transaction</LinkButton>
                    <LinkButton > Transaction</LinkButton> */}
                </MoviePoster>
            </Wrapper>
        </>
    );

    function MovieTheatre(){
        return(
            <>
                {movieTheatres.map((theatre) =>(
                   <Scwrapper>
                        <SearchSection>
                            <h4>{theatre.name}</h4>
                            <h6>{theatre.subtitle}</h6>
                            <div style={{display: 'flex',gap: '20px',cursor: 'pointer'}}>
                                {
                                    availableShowTime.map((show) => (
                                        <ShowTimeWrapper href="/movieseat" as="movieseat">
                                            <ShowTimeMovie>
                                                {show.showtime}
                                                {/* <Button variant='fill' size="small" href="/movieseat">{show.showtime}</Button> */}
                                            </ShowTimeMovie>
                                        </ShowTimeWrapper>
                                    ))
                                }
                            </div>
                        </SearchSection>
                   </Scwrapper>
                ))}
            </>
        )
    }
    function SearchCinemas(){
        return(
            <Scwrapper>
                <SearchSection>
                    <SearchMovies>
                        <Icon style={{color: 'white'}} size="0.9em" icon={search} />
                        <Input 
                            id=" search-movie"
                            type="text"
                            placeholder="Search movies or theatres"
                        />
                    </SearchMovies>
                </SearchSection>
                <div>
                <div style={{display: 'flex',gap: '20px',listStyle: 'none',whiteSpace: 'nowrap'}}>
                    {SEATSET.map((data) =>(
                        <>
                            <h4 style={{color: `${data.color}`}}>{data.label}</h4>
                        </>
                    ))}
                    </div>
                </div>
            </Scwrapper>
        );
    }
    function ShowTime(){
        return(
            <Showwrapper>
                <TimingStuff>
                        {dummyShowTime.map((data) =>(
                           (data.movierunning ? 
                            <Monthrow>
                                <Month>
                                    <Showinfo>
                                        <h5 style={{fontSize: '1.4rem',fontWeight: 'bolder'}}>{data.date}</h5>
                                        <h5 style={{fontSize: '1rem'}}>{data.day}</h5>
                                    </Showinfo>
                                </Month>
                            </Monthrow> : 
                        "")
                        ))}
                </TimingStuff>
            </Showwrapper>
        );
    }
}



const ShowTimeMovie = styled.div`
    color: white;
    font-size: 12px;
    font-weight: bold;
`;

const ShowTimeWrapper = styled.button`
    background-color: #17a21d;
    padding: 12px 10px;
    width: 100px;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;

const Showinfo = styled.div`
    padding: 10px 10px 10px 10px;
`;
const Scwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 7px;
    background-color: #333333;
    color: white;
    margin-top: 30px;
`;

const Input = styled.input`
    outline: 0px;
    border-color: rgb(28 28 28);
    width: 100%;
    font-size: 1rem;
    background: ${COLORS.gray[300]};
    color: ${COLORS.white};
`;


const SearchSection = styled.div`
  /* background: hotpink; */
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const SearchMovies = styled.div`
  background: ${COLORS.gray[300]};
  width: 60%;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;


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
    background-color: #333333;
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



const TimingStuff = styled.div`
    display: flex;
    gap: 20px;
`;
