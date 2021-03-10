import React from "react";

export const DetailRowView = ({person}) => {
    return <table className="table table-sm">
        <thead>
        <tr>
            <th>
                Пользователь
            </th>
            <th>
                Индекс
            </th>
            <th>
                Адрес проживания
            </th>
            <th>
                Город
            </th>
            <th>
                Провинция/штат
            </th>
            <th>
                Описание
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{person.firstName + ' ' + person.lastName}</td>
            <td>{person.address.zip}</td>
            <td>{person.address.streetAddress}</td>
            <td>{person.address.city}</td>
            <td>{person.address.state}</td>
            <td>{person.description}</td>
        </tr>
        </tbody>
    </table>
}
