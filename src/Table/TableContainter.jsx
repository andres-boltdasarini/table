import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {addPost, requestUsers, updateNewPostText} from "../redux/tableReducer";
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
        currentPage: state.tableReducer.currentPage,
        posts: state.tableReducer.posts,
        newPostText: state.tableReducer.newPostText
    }
}


export default connect(mapStateToProps,{requestUsers,updateNewPostText,addPost})(TableContainer)