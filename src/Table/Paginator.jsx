import React from 'react';




let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        {pages.map(p => {
            return <span className={currentPage}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>

}

export default Paginator