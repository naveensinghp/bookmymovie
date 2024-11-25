import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';
import { Heart } from 'react-feather';
import Spinner from '../Spinner';
import TextLink from '../TextLink/TextLink';
import MovieCalendar from '../../pages/moviecalendar';
import { Link } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';



function MovieCard(props) {
  const navigate = useNavigate();
   let movie = props.data;
   const[like, setLink] = React.useState(movie.likesCount);
   function onClickLike(){
    setLink(like +1)
   }
   const handleClick = () => {
    const data = { message: 'Hello, World!' };
    navigate('/moviecalendar', { state: data }); // Pass data using state
  };
  return(
    <>
     {/* <Spinner /> */}
     {/* <div className={styles.wrapper}>
     <a href="/" className={styles.thumbnailWrapper}>
        <img
          alt="A balloon store"
          className={styles.thumbnail}
          src="https://courses.joshwcomeau.com/cfj-mats/article-image-balloons.jpg"
        />
      </a>
     </div> */}
      <div className={styles.cardwrapper}>
      <div className={styles.wrapper}>
      <a href="/" className={styles.thumbnailwrapper}>
           <img src={movie.moviePoster} 
          className={styles.movieimg} 
          alt="bookmymovielogo"/>
        </a>
      </div>
       
       
        <div>
          { movie.newRelease ? <div className={styles.newreleaselabel}> Releasing on {movie.releaseDate}</div> : ""}
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
          <div className={styles.bookingstuff}>
            <Button href={'/moviecalendar'} variant='fill' size="small" onClick={handleClick}>Book Tickets</Button>
            <Button variant='fill' size="small">Play Trailer</Button>
          </div>
        </div> 
      </div>
    </>
  );
}

export default MovieCard;
