import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Show.css";

import { showMovie } from "../../utilities/movies-service";

const Show = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState(null);

	const { id } = useParams();
	const handleRequest = async () => {
		try {
			const movieData = await showMovie(id);
			if (movieData) setMovie(movieData);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};
	console.log(movie);
	useEffect(() => {
		handleRequest();
	}, []);

	const loading = () => (
		<div>
			<h1>Loading Movies...</h1>
		</div>
	);

	const loaded = () => (
		<div className="Show">
			<h1>Movie Details</h1>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
				<p>Title: {movie.title}</p>
				<p>
					Genre:
					{movie.genres.map((genre) => {
						return genre.name;
					})}
				</p>
				<p>Status: {movie.status}</p>
				<p>Overview: {movie.overview}</p>
			</div>
		</div>
	);
	return movie ? loaded() : loading();
};

export default Show;
