import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';



function MovieCard(props) {
   let movie = props.data;
   console.log(props);
  return(
    <>
      <div className={styles.cardwrapper}>
        <img src={movie.moviePoster} className={styles.movieimg} alt="bookmymovielogo"/>
        <div className={styles.moviename}>
            <h4>{movie.movieName}</h4>
        </div>
        {/* <Button name="Login With OTP"/> */}
        { movie.newRelease ? <div className={styles.newreleaselabel}> New Release</div> : ""}
        <div className={styles.bookingstuff}>
            <Button>Book Ticket</Button>
            <Button>Play Trailer</Button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
