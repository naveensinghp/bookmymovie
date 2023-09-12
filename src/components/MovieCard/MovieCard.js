import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';


function MovieCard() {
  return(
    <>
      <div className={styles.cardwrapper}>
        <img src="assets/kufu1.webp" class={styles.movieimg} style={{objectFit: 'cover'}} alt="bookmymovielogo"/>
        <div className={styles.moviename}>
            <h4>BARBIE</h4>
            <div>English (U/A)</div>
        </div>
        <Button name="Login With OTP"/>
      </div>
    </>
  );
}

export default MovieCard;
