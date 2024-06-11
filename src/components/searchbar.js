import React from "react";





class Searchbar extends React.Component {

    handleforSubmit = (e) => {
        e.preventDefault()
    }
    render() {

        return (
            <form onSubmit={this.handleforSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input

                            onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control"
                            placeholder="Search a movie" />

                    </div>
                </div>
            </form>
        )
    }
}


export default Searchbar