import React from "react";





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
                        <button type="button" className="btn btn-primary ms-3">Add Movie</button>
                    </div>
                </div>
            </form >
        )
    }
}


export default Searchbar