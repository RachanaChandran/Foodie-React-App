import React from 'react';
import '../Style/Dishes.scss';
function Pagination(props) {
    // console.log(props.filteredDishes)
    let numOfPages = [];
    let count = Math.ceil(props.filteredDishes.length/props.itemsPerPage);
    //for going to the next page while selecting page
    function updatePage(e){
        let li = e.target;
        let page = li.innerText;
        props.setCurrentPage(page);
    }
    for(let i=1;i<=count;i++)
    {
        numOfPages.push(i);
    }
    let pages = numOfPages.map((item)=>{
        return <li onClick={updatePage}>
            {item}
        </li>
    })
    return (
        <div className='pagination-section'>
            <ul className='pagination'>
                {pages}
            </ul>
        </div>
    );
}

export default Pagination;