import React from 'react'
import MovieList from "./MovieList"
import SearchBar from './Searchbar'
import axios from 'axios'
import AddMovie from "./AddMovie"
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

class App extends React.Component {
    state = {
        movies: [],
        serachQuery: ""
    }

    async componentDidMount() {
        const baseURL = "http://localhost:3001/movies"
        const response = await axios.get(baseURL)
        this.setState({ movies: response.data })

    }
    //AXIOS
    deleteMovie = async (movie) => {
        await axios.delete(`http://localhost:3001/movies/${movie.id}`)
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


    addMovie = async (movie) => {
        const data = await axios.post('http://localhost:3001/movies', movie)
        console.log(data);
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLocaleLowerCase().indexOf(this.state.serachQuery.toLowerCase()) !== -1
            }
        )


        return (
            <Router>
                <div className='container'>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <React.Fragment>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <SearchBar searchMovieProp={this.searchMovie} />
                                        </div>
                                    </div>
                                    <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
                                </React.Fragment>
                            }
                        />
                        <Route path="/add" element={<AddMovie onAddMovie={this.addMovie} />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}





export default App

