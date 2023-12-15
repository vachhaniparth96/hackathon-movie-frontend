import { useState, useEffect } from "react"
import  { Link } from "react-router-dom"

import { getMovies } from "../../utilities/movies-service"

const Movies = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const handleRequest = async () => {
        try{
            const movieData = await getMovies()
            console.log(movieData)
            if (movieData) setMovies(movieData)
            setIsLoading(false)
        } catch(err){
            console.log(err)
        }
    }

useEffect(() => {
    handleRequest()
}, [])
console.log(movies, "movies")

const loading = () => {
    return (
        <div>
            <h1>Loading Movies...</h1>
        </div>
    )
}

const loaded = () => {
    return (
        <div>
            <h1>All Movies</h1>
            <div>
                {movies.map((movie) => (
                    <div key={movie._id}>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} alt={movie.title} />
                            <p>{movie.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

return (
        <div className="Movies">
            {movies ? loaded() : loading()}
        </div>
    )
}

export default Movies