import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {requestUsers} from "../redux/tableReducer";




class Table extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }
    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            </>
    }
}
export const getIsFetching = (state) => {
    return state.tableReducer.isFetching;
}

let mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state)
    }
}


export default connect(mapStateToProps,{requestUsers })(Table)