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

         const result = Object.values(this.props.items).map(v => Object.values(v)).map(p =><div>{p[0]}</div>)
         let postsElementsId = this.props.items.map(p => <div>{p.id}</div>)
         let postsElementsFirstNamerev = this.props.items.map(p => p.firstName).reverse().map(p =><div>{p}</div>)
         let postsElementsFirstName = this.props.items.map(p => p.firstName).map(p =><div>{p}</div>)
         const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage
         const indexOfFirstTodo = indexOfLastTodo - this.state.todosPerPage
         const currentTodos = postsElementsFirstName.slice(indexOfFirstTodo, indexOfLastTodo).map(p => <div>{p}</div>)
         const atem1 = this.props.items.sort((a, b) => (a.id - b.id)).map(p =><div>{p.id}</div> )
         const atemA = this.props.items.sort((a, b) => {if(a.firstName < b.firstName ) return -1
             if(a.firstName  > b.firstName ) return 1}).map(p =><div>{p.id}</div> )

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
export default Table