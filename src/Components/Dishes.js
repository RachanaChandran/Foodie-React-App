import React, { useContext, useState } from 'react';
import '../Style/Dishes.scss';
import Popup from './Popup';
import { MenuContext } from './Home';
import AddToCart from './AddToCart';

function Dishes(props) {
    const MenuData = useContext(MenuContext);
    // const MenuData = menu;
    // const category = data;
    // console.log(category)
    //we can use props.children
    const[popup,setpopup] = useState(false); 
    const[currentDish,setcurrentDish] = useState();
    const[cartitem,setcartitem]=useState([{}]);

    let maxdishes = 4;
    let handlePopup = ((id)=>{
        setpopup(true);
        MenuData.filter((dish)=>{
            return dish.idMeal === id
        }).map((item)=>{
            setcurrentDish(item)
            })
        })
    
    let specialDishes = MenuData.map((item,index)=>{
        // console.log(item);
        if(index<maxdishes)
        {
            return(
                <li onClick={()=>handlePopup(item.idMeal)}>            
                    <img src={item.strMealThumb} alt='item'/>
                    <h3>{item.strMeal}</h3>
                </li>
            )
        }
    })
    let handleAddToCart = ((strimg,strtitle)=>{
        setcartitem([
            ...cartitem,
        {
            img:strimg,
            title:strtitle
        }
        ])
        
    })
    return (
        <div className='special-dishes'>
            <div className='container'>
                <div className='special-dishes-content text-center' >
                    <h2>Our Special Dishes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolor consectetur maxime architecto excepturi fugit beatae illo saepe nemo nisi, animi aliquam possimus voluptatem odio.</p>
                </div>
                {popup===true && <Popup setpopup={setpopup} currentDish={currentDish} handleAddToCart={handleAddToCart}/>}
                <div className='special-dishes-list'>
                    <ul>
                        {specialDishes}
                    </ul>
                </div>
            </div>
            <AddToCart cartitem={cartitem}/>
        </div>
    );
}

export default Dishes;