import React from 'react';






class Sorti extends React.Component {
    state = {
        buttext:'down',
        sorti:false,
        status:this.props.status
    }

    activateSorti = () =>{
        this.setState({
            sorti:true
        })}



    render() {
      /*  let postsElementsId = this.props.items.map( p => p.id).sort(function (a, b) {return a - b}).reverse().map( p => <div>{p}</div>)
        let postsElementsFirstName = this.props.items.map( p => p.firstName).sort().reverse().map( p => <div>{p}</div>)
        let postsElementsFirstNamerev = this.props.items.map( p => p.firstName).sort().map( p => <div>{p}</div>)*/
        return  <>


         {/*  <table border="1">
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
            </table>*/}
        </>
    }
}




export default Sorti