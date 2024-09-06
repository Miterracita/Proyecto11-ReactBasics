import PeticionApi from "../PeticionApi/PeticionApi";
import BoxList from "../box-list/box-list";
import "./MovieList.css";

const MovieList = () => {
    return (
        <PeticionApi type="movie">
            {(movies, type) => (
                <ul className="list">
                    {movies.map(movie => (
                        <BoxList key={movie.id} apiInfo={movie} type={type}/>
                    ))}
                </ul>
            )}
        </PeticionApi>
    );
};

export default MovieList;
