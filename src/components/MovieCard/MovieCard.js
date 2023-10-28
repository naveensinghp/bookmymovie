import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';
import { Heart } from 'react-feather';
import Spinner from '../Spinner';



function MovieCard(props) {
   let movie = props.data;
  return(
    <>
     {/* <Spinner /> */}
      <div className={styles.cardwrapper}>
        <img src={movie.moviePoster} className={styles.movieimg} alt="bookmymovielogo"/>
        <div>
          { movie.newRelease ? <div className={styles.newreleaselabel}> New Release</div> : ""}
          <div className={styles.likeheart}>
            <Heart size={18} color='white' />
          </div>
          <div className={styles.likescount}>
              12k
          </div>
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
            <Button variant='fill' size="small" href="https://www.google.com">Book Tickets</Button>
            <Button variant='fill' size="small">Play Trailer</Button>
          </div>
        </div> 
      </div>
    </>
  );
}

export default MovieCard;
