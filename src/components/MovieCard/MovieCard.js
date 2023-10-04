import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';

function MovieCard(props) {
   let movie = props.data;
  return(
    <>
     {/* <Spinner /> */}
      <div className={styles.cardwrapper}>
        <img src={movie.moviePoster} className={styles.movieimg} alt="bookmymovielogo"/>
        <div>
          { movie.newRelease ? <div className={styles.newreleaselabel}> New Release</div> : ""}
        </div>
         {/* Entire movie set hover */}
        <div className={styles.moviehover}>
          <div className={styles.moviename}>
              <h4>{movie.movieName}</h4>
              <div>
                {movie.language} • (U/A) • {movie.genre}
              </div>
          </div>
          <div className={styles.bookingstuff}>
            <Button>Book Tickets</Button>
            <Button>Play Trailer</Button>
          </div>
        </div> 
      </div>
    </>
  );
}

export default MovieCard;
