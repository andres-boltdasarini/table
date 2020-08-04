import React from 'react';

const Table = (props) => {

        let postsElementsId = props.items.map( p => p.id).sort(function (a, b) {return a - b}).reverse().map( p => <div>{p}</div>)
        let postsElementsFirstName = props.items.map( p => p.firstName).sort().reverse().map( p => <div>{p}</div>)
        let postsElementsFirstNamerev = props.items.map( p => p.firstName).sort().map( p => <div>{p}</div>)

        return  <>
            <table border="1">
                <tr>
                    <th>Id</th>
                    {/*<th>FirstName <button onClick={this.activateSorti} >{this.state.buttext}</button></th>*/}
                </tr>
                <tr>
                    <td>{postsElementsId}</td>
                    <td>{/*{!this.state.sorti && postsElementsFirstName}*/}
                        {/*{this.state.sorti && postsElementsFirstNamerev}*/}
                        {postsElementsFirstName}
                    </td>
                </tr>
            </table>
        </>

}
export default Table