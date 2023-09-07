import React from 'react';
import styles from './Nowshowing.module.css';
import styled from 'styled-components';
import { range } from '../../utils';

function NowShowingMovie() {
  return(
      <Wrapper>
        <h4 className={styles.nowshowing}>Now Showing</h4>
        {range(2).map((num) => (
        <CurrentShowingMovie>
          <div className={styles.wrapper}>
            <img src="assets/leo.jpg" alt="bookmymovielogo" width={374}/>
          </div>
        </CurrentShowingMovie>
        ))}
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