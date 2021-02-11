import React, {useState} from 'react'

export const TableSearch = props => {
    const [val, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    onClick={props.onSearch.bind(val)} >Search</button>
            </div>
            <input
                type="text"
                className="form-control"
                onChange={valueChangeHandler}

            />
        </div>
    )
}
