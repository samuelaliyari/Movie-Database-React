import MovieCards from "../components/MovieCards/MoviCards";
import Header from "../components/Header/Header";
import "./Home.scss";
import movies from "../data/Movies";
import { useEffect, useState } from "react";

const Home = () => {
	const [movieData, setMovieData] = useState(movies);

	useEffect(() => {
		console.log("home changed");
	}, [movieData]);

	return (
		<main>
			<Header
				movieDataHome={movieData}
				setter={setMovieData}
			/>
			<MovieCards movieDataHome={movieData} />
		</main>
	);
};

export default Home;
