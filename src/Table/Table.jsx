import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {requestUsers} from "../redux/tableReducer";




class Table extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }
    render() {
        let postsElementsId = this.props.items.map( p => p.id).sort(function (a, b) {return a - b}).map( p => <div>{p}</div>)
        let postsElementsFirstName = this.props.items.map( p => p.firstName).sort().map( p => <div>{p}</div>)
        return  <>
           { this.props.isFetching ? <Preloader /> : null }
            <div >
                { postsElementsId }
                { postsElementsFirstName }
            </div>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.tableReducer.items,
        isFetching: state.tableReducer.isFetching
    }
}


export default connect(mapStateToProps,{requestUsers })(Table)