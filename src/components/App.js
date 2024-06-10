import React from 'react'
import MovieList from "./MovieList"

class App extends React.Component {
    state = {
        movies: [
            {
                "id": 1,
                "name": "interstaller",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 2,
                "name": "interstaller2",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 3,
                "name": "interstaller3",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 4,
                "name": "interstaller4",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            }
        ]
    }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState({
            movies: newMovieList
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}





export default App

