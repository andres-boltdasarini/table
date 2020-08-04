import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {requestUsers} from "../redux/tableReducer";
import Table from "./Table";





class TableContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers()
    }

    render() {
        return  <>
           {this.props.isFetching ? <Preloader /> : null}
           <Table {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.tableReducer.items,
        isFetching: state.tableReducer.isFetching,
        totalUsersCount: state.tableReducer.totalUsersCount,
        pageSize: state.tableReducer.pageSize,
        currentPage: state.tableReducer.currentPage
    }
}


export default connect(mapStateToProps,{requestUsers })(TableContainer)