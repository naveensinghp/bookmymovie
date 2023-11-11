import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';
import { Heart } from 'react-feather';
import Spinner from '../Spinner';
import TextLink from '../TextLink/TextLink';
import MovieCalendar from '../../pages/moviecalendar';
import { Link } from "react-router-dom"; 



function MovieCard(props) {
   let movie = props.data;
   const[like, setLink] = React.useState(12);
   function onClickLike(){
    setLink(like +1)
   }
  return(
    <>
     {/* <Spinner /> */}
      <div className={styles.cardwrapper}>
        <img src={movie.moviePoster} className={styles.movieimg} alt="bookmymovielogo"/>
        <div>
          { movie.newRelease ? <div className={styles.newreleaselabel}> Releasing on Fri Nov 10</div> : ""}
          <div className={styles.likeheart}>
            <Heart size={18} color='white' onClick={onClickLike} />
          </div>
          <div className={styles.likescount}>
              {like}k
          </div>
        </div>
         {/* Entire movie set hover */}
        <div className={styles.moviehover}>
          <div className={styles.moviename}>
              <h4 className={styles.movietitle}>{movie.movieName}</h4>
              <div>
                {movie.language} • (U/A) • {movie.genre}
              </div>
          </div>
          {/* <Link to="/moviecalendar" className="btn btn-primary">hello</Link> */}

          <div className={styles.bookingstuff}>
            <Button variant='fill' size="small" href="/moviecalendar">Book Tickets</Button>
            <Button variant='fill' size="small">Play Trailer</Button>
            {/* <TextLink href="/moviecalendar">
              Hello World
            </TextLink> */}
          </div>
        </div> 
      </div>
    </>
  );
}

export default MovieCard;
