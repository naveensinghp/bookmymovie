import React from 'react';
import styles from './Nowshowing.module.css';
import styled from 'styled-components';
import { range } from '../../utils';
import MovieCard from '../MovieCard/MovieCard';


function NowShowingMovie() {
  return(
      <Wrapper>
        <h4 className={styles.nowshowing}>Now Showing</h4>
        <CurrentShowingMovie>
          {range(4).map((num) =>( 
            <MovieCard />
          ))}
        </CurrentShowingMovie>
      </Wrapper>
  );
}

export default NowShowingMovie;

const Wrapper = styled.div`
 margin-left: 15%;
`

const CurrentShowingMovie = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`