import moviesArr from "../data/movies.json"


function MovieList(){

    let message = "";
    if(moviesArr.length !== 0){
        message = <h1>Number of movies: {moviesArr.length}</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }

    return (
        <>
            
            {message}

            {moviesArr.map((movieObj) => {
                return (
                    <div key={movieObj.id}>

                        <p>{movieObj.title}</p>
                        <p>{movieObj.year}</p>

                        { movieObj.rating >= 7 && <p className="badge">Top Movie</p>}
                        
                        { movieObj.imgURL
                            ? <img src={movieObj.imgURL} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }
                        
                    </div>
                )
            })}
        </>
    )
}

export default MovieList;