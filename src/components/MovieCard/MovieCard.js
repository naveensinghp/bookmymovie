import React from 'react';
import styles from './MovieCard.module.css';
import Button from '../Button/Button';
import { Heart } from 'react-feather';
import { Link, useNavigate } from "react-router-dom";

function MovieCard(props) {

  const navigate = useNavigate();
  const movie = props.data;

  const [like, setLike] = React.useState(movie.likesCount);

  function onClickLike() {
    setLike(like + 1);
  }

  const goToMovieCalendar = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className={styles.cardwrapper}>
      
      <div className={styles.wrapper}>
        <Link to={`/movie/${movie.id}`} className={styles.thumbnailwrapper}>
          <img
            src={movie.moviePoster}
            className={styles.movieimg}
            alt={movie.movieName}
          />
        </Link>
      </div>

      <div>
        {movie.newRelease && (
          <div className={styles.newreleaselabel}>
            Releasing on {movie.releaseDate}
          </div>
        )}

        <div className={styles.likeheart}>
          <Heart size={18} color="white" onClick={onClickLike} />
        </div>

        <div className={styles.likescount}>
          {like}k
        </div>
      </div>

      <div className={styles.moviehover}>
        <div className={styles.moviename}>
          <h4 className={styles.movietitle}>{movie.movieName}</h4>
          <div>
            {movie.language} • (U/A) • {movie.genre}
          </div>
        </div>

        <div className={styles.bookingstuff}>
          {/* Button({variant,size,children,href})  */}
          <Button
            variant="fill"
            size="small"
            onClick={goToMovieCalendar}
          >
            Book Tickets
          </Button>
          <Button variant="fill" size="small">
            Play Trailer
          </Button>
        </div>
      </div>

    </div>
  );
}

export default MovieCard;