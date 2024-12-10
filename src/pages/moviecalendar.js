import styled from 'styled-components';
import React from 'react';
import Spacer from "../components/Spacer/Spacer";
import { getDates, getDummyData} from "../data";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from "react-feather";
import { COLORS } from '../constants';
import { useLocation } from "react-router-dom";

export default function MovieCalendar(){
   
    return(
        <>
           <MovieInfoWrapper>
                 {/* 
                 Reference Component
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
                    imgsrc={'assets/movie2.jpg'}
                    movietile={'Avatar: The Way of Water'}
                />
                <Spacer size={30} />
                <MovieShowInfo>
                  <MovieShowWrapper>
                   <DateSection>
                    <DateSectionWrapper>
                        <DateTitle>Date</DateTitle>
                            <ChevronLeft color="orange" size={18} />
                            {getDates().map(({id, day, month, week}) => ( 
                                <MovieDatePicker key={id}>
                                    <MovieDateWrapper>
                                        <MovieMonth>{month}</MovieMonth>
                                        <MovieDay>{day}</MovieDay>
                                        <MovieDate>{week}</MovieDate>
                                    </MovieDateWrapper>
                                </MovieDatePicker>
                            ))}
                        <ChevronRight color="orange" size={18} />
                    </DateSectionWrapper>
                    <div style={{color: 'white'}}>
                        <div> Time</div>
                        <Select
                            label="sort"
                            value="test">
                                <option value="newst">Coimbatore</option>
                                <option value="game">Bangalore</option>
                                <option value="cutest">Chennai</option>
                        </Select>
                    </div>
                   </DateSection>
                  </MovieShowWrapper>
                </MovieShowInfo>
               
            </MovieInfoWrapper>
        </>
    );


}

const Select = styled.select`
    background: ${COLORS.gray[300]};
    width: 100%;
    padding: 10px 50px;
    color: white;
    /* border-color: ${COLORS.gray[300]}; */
    font-size: 14px;
    border-radius: 8px;
    color: ${COLORS.white};
    height: 2.5rem;
`;

const MovieDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MovieMonth = styled.div`
    color: var(--color-gray-300);
    font-size: 12px;
`
const MovieDate = styled.div`
    font-weight: bolder;
    font-size: 12px;
    color: var(--color-gray-300);
`
const MovieDay = styled.div`
    font-weight: bolder;
    font-size: 12px;
    color: var(--color-gray-300);
`

const DateTitle = styled.div`
    color: var(--color-blue-300);
    font-weight: bolder;
`

const MovieDatePicker = styled.div`
    cursor: pointer;
    padding: 8px 16px;
    background: var(--color-blue-300);
    /* color: var(--color-black-400); */
    /* background: var(--color-gray-300); */
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
    color: var(--color-black-400);
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const MovieShowInfo = styled.div`

`

const MovieShowWrapper = styled.div`
    /* height: 100px; */
    background: #29292d;
    border-radius: 10px;
`


const MovieInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 40 60%;
    padding: 40px;

`
