import React from 'react'

export class TableSearch extends React.Component {
    state = {
        val : null
    }
     valueChangeHandler = event => {
         this.setState({
             val: event.target.value
         })
     }

    render() {
        return (
            <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => this.props.onSearch(this.state.val)}>Search
                    </button>
                </div>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.valueChangeHandler}

                />
            </div>
        )
    }
}
