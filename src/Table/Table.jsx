import React from 'react';

 class Table extends React.Component {
     constructor() {
         super();
         this.state = {
             buttext: 'down',
             sorti: false,
             currentPage: 3,
             todosPerPage: 3
         }
         this.handlClick = this.handlClick.bind(this);
     }
     handlClick(event) {
         this.setState({
             currentPage: Number(event.target.id)
         });
     }
        activateSorti = () => {
            this.setState({
                sorti:true
            })}

     render() {

         let postsElementsId = this.props.items.map(p => p.id).sort(function (a, b) {return a - b}).reverse().map(p => <div>{p}</div>)
         let postsElementsFirstName = this.props.items.map(p => p.firstName).sort().reverse()
         const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage
         const indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage
         const currentTodos = postsElementsFirstName.slice(indexOfFirstTodo, indexOfLastTodo).map(p => <div>{p}</div>)

         const pageNumbers = [];
         for (let i = 1; i <= Math.ceil(postsElementsFirstName.length / this.state.todosPerPage); i++) {
             pageNumbers.push(i);
         }
         const renderPageNumbers = pageNumbers.map(number => {
             return (
                 <li
                     key={number}
                     id={number}
                     onClick={this.handlClick}
                 >
                     {number}
                 </li>
             );
         })
         return <>
             {renderPageNumbers}
             <table border="1">
                 <tr>
                     <th>Id</th>
                     <th>FirstName <button onClick={this.activateSorti} >{this.state.buttext}</button></th>
                 </tr>
                 <tr>
                     <td>{postsElementsId}</td>
                     <td>{!this.state.sorti && postsElementsFirstName}
                         {this.state.sorti && currentTodos}
                     </td>
                 </tr>
             </table>
         </>
     }
}
export default Table