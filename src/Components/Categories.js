import React, { useState } from 'react';
import '../Style/Dishes.scss';
import Pagination from './Pagination';

function Categories(props) {
// console.log(props.dish)
    const[filteredDishes,setfilteredDishes] = useState([]);
    const[active,setactive] = useState('Beef');
    // console.log(filteredDishes)
////////pagination
    const[currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    let lastIndex = currentPage*itemsPerPage;
    let firstindex = lastIndex - itemsPerPage;
///////////////
    const Dishes = props.dish.map((item)=>{
        return <li>
            <img src={item.strMealThumb} alt="categoryDish"/>
            <h2>{item.strMeal}</h2>
        </li>
    })
    const getCategoryItems=((category)=>{
        setactive(category);
        let allfilteredDishes = props.menu.filter((item)=>{
           return item.strCategory === category
        }).map((selectedmenu)=>{          
        return <li>
                    <img src={selectedmenu.strMealThumb} alt="menuitem"/>
                    <h2>{selectedmenu.strMeal}</h2>
                </li>
        })
        setfilteredDishes(allfilteredDishes);
        
    });
    
    let categories = props.data.map((item)=>{
        return( 
            <li onClick={()=>getCategoryItems(item.strCategory)} id='selectedLi' className={item.strCategory === active?'active':''}>
                {item.strCategory}
            </li>
        )
    })
    let filteredDishesnew = filteredDishes.slice(firstindex,lastIndex);
    // console.log(filteredDishesnew)
    let DishesNew = Dishes.slice(firstindex,lastIndex)
    return (
        <div className='section'>
            <div className='categories'>
                <div className='categories-content'>
                        <h2>Choose your dish</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis excepturi nesciunt nulla, fugiat eaque corporis enim libero beatae. Non dolor aspernatur aliquam quod exercitationem amet.</p>
                </div>
                <div className='categories-list'>
                    <ul>
                        {categories}
                    </ul>
                </div>
            </div>
            <div className='filtered-dishes'>
                <div className='filtered-dishes-content'>
                    {active === 'Beef' ?<ul>
                    {DishesNew}
                    </ul> :filteredDishes.length === 0 ? <div className='notfound'> item not found!<br/>Choose Another Dish</div>: 
                    <ul>
                        {filteredDishesnew}
                    </ul>}
                </div>
            </div>
            <div>
                <Pagination Dishes={Dishes} currentPage={currentPage} filteredDishes={filteredDishes} itemsPerPage = {itemsPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
        
        
    );
}

export default Categories;