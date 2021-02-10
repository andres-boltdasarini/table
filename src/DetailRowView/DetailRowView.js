import React from "react";

export  const  DetailRowView = ({person}) => {
   return   <div>
       <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
       <p>
          <b>Описание:</b>  <br />
           <i> {person.description} </i>
       </p>

       <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
       <p>Город: <b>{person.address.city}</b></p>
       <p>Провинция/штат: <b>{person.address.state}</b></p>
       <p>Индекс: <b>{person.address.zip}</b></p>

   </div>
}
