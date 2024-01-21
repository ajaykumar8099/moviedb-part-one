import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {voteAverage, posterPath, title, id, originalTitle} = movieData
  return (
    <Link to={`/movie/${id}`}>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={title}
          className="movie-card"
        />
        <p>{title}</p>
        <p>{voteAverage}</p>
        <img src={posterPath} alt={originalTitle} />
        <button type="button">View Details</button>
      </li>
    </Link>
  )
}
export default MovieCard
