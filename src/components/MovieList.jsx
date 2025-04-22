import moviesArr from "../data/movies.json"


function MovieList(){
    return (
        <>
            <h1>List of movies:</h1>

            {moviesArr.map((movieObj) => {
                return (
                    <div key={movieObj.id}>
                        <p>{movieObj.title}</p>
                        <p>{movieObj.year}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList;