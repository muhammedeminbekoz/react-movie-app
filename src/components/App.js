import React from 'react'
import MovieList from "./MovieList"
import SearchBar from './Searchbar'
import axios from 'axios'

class App extends React.Component {
    state = {
        movies: [],
        serachQuery: ""
    }



    async componentDidMount() {
        const baseURL = "http://localhost:3001/movies"
        const response = await axios.get(baseURL)
        console.log(response)
        this.setState({ movies: response.data })

    }
    //AXIOS
    deleteMovie = async (movie) => {
        const response = await axios.delete(`http://localhost:3001/movies/${movie.id}`)
        console.log(response)
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

