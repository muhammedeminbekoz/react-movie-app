import React from "react";





class Searchbar extends React.Component {
    state = {
        searchQuery: ""
    }
    handleforSubmit = (e) => {
        e.preventDefault()
    }
    render() {

        return (
            <form onSubmit={this.handleforSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input
                            value={this.state.searchQuery}
                            onChange={(event) => this.setState({ searchQuery: event.target.value })}
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