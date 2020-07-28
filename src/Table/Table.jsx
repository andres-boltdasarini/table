import React from 'react';
import {connect} from 'react-redux';
import Preloader from "../common/Preloader";
import {requestUsers} from "../redux/tableReducer";




class Table extends React.Component {
    state = {
        buttext:'down',
        sorti:false,
        status:this.props.status
    }
    buttontextupdate = () => {
        this.setState({
            buttext:'up'
        })
    }
    activateSorti = () =>{
        this.setState({
            sorti:true
        })}
    deactivateSorti(){
        this.setState({
            sorti:false
        })}
    componentDidMount() {
        this.props.requestUsers()
    }
    render() {
        let postsElementsId = this.props.items.map( p => p.id).sort(function (a, b) {return a - b}).reverse().map( p => <div>{p}</div>)
        let postsElementsFirstName = this.props.items.map( p => p.firstName).sort().reverse().map( p => <div>{p}</div>)
        let postsElementsFirstNamerev = this.props.items.map( p => p.firstName).sort().map( p => <div>{p}</div>)
        return  <>
           {this.props.isFetching ? <Preloader /> : null}
           <table border="1">
                <tr>
                    <th>Id</th>
                    <th>FirstName <button onClick={this.activateSorti} >{this.state.buttext}</button></th>
                </tr>
                <tr>
                    <td>{postsElementsId}</td>
                    <td>{!this.state.sorti && postsElementsFirstName}
                        {this.state.sorti && postsElementsFirstNamerev}
                    </td>
                </tr>
            </table>
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