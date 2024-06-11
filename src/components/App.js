import React from 'react'
import MovieList from "./MovieList"
import SearchBar from './Searchbar'

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
                "name": "Interstaller3",
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
            },
            {
                "id": 5,
                "name": "interstaller5",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 6,
                "name": "interstaller6",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 7,
                "name": "interstaller7",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            },
            {
                "id": 8,
                "name": "interstaller8",
                "rating": "9.0",
                "overview": "herkese salam",
                "imageURL": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg"
            }

        ],
        serachQuery: ""
    }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({ serachQuery: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLocaleLowerCase().indexOf(this.state.serachQuery.toLowerCase()) !== -1
            }
        )


        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar
                            searchMovieProp={this.searchMovie}
                        />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}





export default App

