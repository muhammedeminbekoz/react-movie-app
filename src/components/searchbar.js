import React from "react";
import { Link } from "react-router-dom";




class Searchbar extends React.Component {

    handleforSubmit = (e) => {
        e.preventDefault()
    }
    render() {

        return (
            <form onSubmit={this.handleforSubmit}>
                <div className="fform-row mb-5 d-flex align-items-center">
                    <div className="col-10">
                        <input
                            onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control"
                            placeholder="Search a movie" />

                    </div>
                    <div className="col-2">
                        <Link to='/add' type="button" className="btn btn-primary ms-3">Add Movie</Link>
                    </div>
                </div>
            </form >
        )
    }
}


export default Searchbar