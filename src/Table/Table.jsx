import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {requestUsers} from "../redux/tableReducer";




class Table extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }
    render() {
        let postsElements =
            this.props.users.map( p => <div>{p.message}</div>)
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <div >
                { postsElements }
            </div>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.tableReducer.users,
        isFetching: state.tableReducer.isFetching
    }
}


export default connect(mapStateToProps,{requestUsers })(Table)