import "./MovieCard.scss"


const MovieCard = ({title, director, duration, genre, rate, year}) => {
    return ( 
        <article>
            <h1>{title}</h1>
            <h2>{director}</h2>
            <p>{duration}</p>
            <h3>{genre.join(" , ")}</h3>
            <h4>{rate}</h4>
            <h5>{year}</h5>
        </article>
     ) ;
}
 
export default MovieCard;   