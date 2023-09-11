import React from 'react';
import styles from './MovieCard.module.css';

function MovieCard() {
  return(
    <>
      <div className={styles.cardwrapper}>
        <img src="assets/kufu1.webp" style={{objectFit: 'cover'}} alt="bookmymovielogo"/>
      </div>
    </>
  );
}

export default MovieCard;
