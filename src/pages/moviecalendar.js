import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';
import { X } from 'react-feather';
import Link from "../components/Link";
import React from 'react';
import { COLORS } from "../constants";
import {search} from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'
import Spacer from "../components/Spacer/Spacer";
import { 
        SEATSET, 
        dummyShowTime,
        movieTheatres,
        availableShowTime    } from "../data";
import Button from "../components/Button";
import { useLocation } from 'react-router-dom';
import MoviePoster from "../components/MoviePoster/MoviePoster";

export default function MovieCalendar(){
    const location = useLocation();
    const data = location.state; //
    console.log('ddd',data);
    return(
        <>
           
            {/* <TextLink  href="/">Go Home</TextLink> */}
            <MovieInfo />
           {/* MovieInfo */}
            {/* MovieDate */}
            {/* <Wrapper>
                <Close>
                    <Link href="/">
                        <X size={32} color="white" />
                    </Link>
                </Close>
                <ShowTime /> 
                <SearchCinemas /> 
                <MovieTheatre />
            </Wrapper> */}
        </>
    );


    function MovieInfo(){
        return(
            <MovieInfoWrapper>
                <MoviePoster 
                    imgsrc={'assets/avatar.jpeg'}
                    movietile={'Avatar: The Way of Water'}
                />
                {/* MovieDetailedInfo */}
                <Spacer size={30} />
                <MovieShowInfo>
                  <MovieShowWrapper>
                   <DateSection>
                        <h4>Date</h4>
                        <MovieDatePicker>
                            <MovieMonth>Jun</MovieMonth>
                            <MovieDate>09</MovieDate>
                            <MovieDay>Tu</MovieDay>
                        </MovieDatePicker>
                   </DateSection>
                  </MovieShowWrapper>
                </MovieShowInfo>
            </MovieInfoWrapper>
        );
    }

    function MovieTheatre(){
        return(
            <>
                {movieTheatres.map((theatre) =>(
                   <Scwrapper>
                        <SearchSection>
                            <h4>{theatre.name}</h4>
                            <h5>{theatre.subtitle}</h5>
                            <Spacer size={30} />
                            <hr/>
                            <Spacer size={30} />
                             {/* MOVIE TIME BOOKING */}
                            <div 
                                    style={{
                                        background: '#f5faf6',
                                        height: '50px', 
                                        width: '150px',
                                        border: '2px solid #76be43',
                                        position: 'relative'
                                }} >
                                <div   
                                    style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            position: 'absolute',
                                            top: '-10px',
                                            background: 'white'
                                            }}> 
                                    Tamil 
                                </div>
                                {/* <div style={{color: '#76be43',fontWeight: 'bold'}}> 12.00 AM </div> */}
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

const MovieMonth = styled.div`

`
const MovieDate = styled.div`
 font-weight: bolder;
`
const MovieDay = styled.div`

`

const MovieDatePicker = styled.div`
    padding: 16px;
    background: var(--color-blue-300);
    height: 90px;
    color: var(--color-black-400);
    border-radius: 50px;
    font-size: 0.9rem;
`

const DateSection = styled.div`
    color: white;
    display: flex;
`

const MovieShowInfo = styled.div`

`

const MovieShowWrapper = styled.div`
    height: 100px;
    background: #3e3f41;
    border-radius: 10px;
    margin: 30px;
`


const MovieInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 40 60%;
    padding: 40px;

`

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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;



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
