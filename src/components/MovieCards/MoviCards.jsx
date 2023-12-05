import { v4 as uuidv4 } from "uuid";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCards.scss";
import { useEffect, useState } from "react";


const MovieCards = ({movieDataHome}) => {

    useEffect(() => {
        console.log("cards changed")
        
    }, [movieDataHome])
	return (
		<>
			<section>
				{movieDataHome.map((movie) => (
					<MovieCard
						key={uuidv4()}
						title={movie.title}
						year={movie.year}
						director={movie.director}
						duration={movie.duration}
						genre={movie.genre}
						rate={movie.rate}
					/>
				))}
			</section>
		</>
	);
};

export default MovieCards;

