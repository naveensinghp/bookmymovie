import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';
import {locationArrow} from 'react-icons-kit/typicons/locationArrow'
import { Icon } from 'react-icons-kit'
import {androidBookmark} from 'react-icons-kit/ionicons/androidBookmark'

function MovieCard(props) {
   let movie = props.data;
   console.log(props);
  return(
    <>
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
      
        {/* <div className={styles.bookmarkmovie}>
          <Icon style={{color: 'white'}} size="2.9em" icon={androidBookmark} />
        </div> */}
        
        
      </div>
    </>
  );
}

export default MovieCard;
