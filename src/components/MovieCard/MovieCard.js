import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';


function MovieCard() {
  return(
    <>
      <div className={styles.cardwrapper}>
        <img src="assets/kufu1.webp" class={styles.movieimg} style={{objectFit: 'cover'}} alt="bookmymovielogo"/>
        <div className={styles.moviename}>
            <h4>Jurassic Park</h4>
        </div>
        {/* <Button name="Login With OTP"/> */}
        <div className={styles.newreleaselabel}>New Release</div>
        <div className={styles.bookingstuff}>
            <Button>Book Ticket</Button>
            <Button>Play Trailer</Button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
