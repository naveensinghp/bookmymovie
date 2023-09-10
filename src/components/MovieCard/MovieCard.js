import React from 'react';
import styles from './MovieCard.module.css';

function MovieCard() {
  return  <div className={styles.cardwrapper}>
    <img src="assets/leo.jpg" alt="bookmymovielogo" width={374}/>
  </div>
}

export default MovieCard;
