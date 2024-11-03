import styled from 'styled-components';
import React from 'react';
import Spacer from "../components/Spacer/Spacer";
import { getDates, getDummyData} from "../data";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from "react-feather";


export default function MovieCalendar(){
    return(
        <>
            <MovieInfo />
        </>
    );


    function MovieInfo(){
        return(
            <MovieInfoWrapper>
                 {/* 
                 <MovieDetailedInfo 
                   poster={poster}
                   title={title}
                   plot={plot}
                   genere={genre}
                   ratings={rating}
                   director={director}
                   writer={writer}
                   stars={star}
                 />
                 */}
                <MoviePoster 
                    imgsrc={'assets/avatar.jpeg'}
                    movietile={'Avatar: The Way of Water'}
                />
                {/* MovieDetailedInfo */}
                <Spacer size={30} />
                <MovieShowInfo>
                  <MovieShowWrapper>
                   <DateSection>
                    <DateSectionWrapper>
                        <DateTitle>Date</DateTitle>
                            <ChevronLeft color="orange" size={18} />
                            {getDates().map(({id, day, month, week}) => ( 
                                <MovieDatePicker>
                                    <MovieDateWrapper key={id}>
                                        <MovieMonth>{month}</MovieMonth>
                                        <MovieDate>{week}</MovieDate>
                                        <MovieDay>{day}</MovieDay>
                                    </MovieDateWrapper>
                                </MovieDatePicker>
                            ))}
                        <ChevronRight color="orange" size={18} />
                    </DateSectionWrapper>
                   </DateSection>
                  </MovieShowWrapper>
                </MovieShowInfo>
            </MovieInfoWrapper>
        );
    }

}

const MovieDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MovieMonth = styled.div`
 font-size: 12px;
`
const MovieDate = styled.div`
    font-weight: bolder;
    font-size: 12px;
`
const MovieDay = styled.div`
 font-size: 12px;
`

const DateTitle = styled.div`
    color: var(--color-blue-300);
    font-weight: bolder;
`

const MovieDatePicker = styled.div`
    cursor: pointer;
    padding: 8px 16px;
    background: ${(props) => (props.isActive ?  '#97b7f3' : 'gray')};
    color: var(--color-black-400);
    border-radius: 50px;
    font-size: 0.9rem;
    overflow: hidden;
`

const DateSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
`

const DateSection = styled.div`
    color: white;
    display: flex;
    gap: 10px;
`

const MovieShowInfo = styled.div`

`

const MovieShowWrapper = styled.div`
    height: 100px;
    background: #3e3f41;
    border-radius: 10px;
`


const MovieInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 40 60%;
    padding: 40px;

`
