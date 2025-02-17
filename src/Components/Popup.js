import React from 'react';
import '../Style/Popup.scss';
function Popup({setpopup,currentDish,handleAddToCart}) {
// console.log(props.currentDish)
    const closePopup = ()=>{
        setpopup(false);
    }
    return (
        <div className='popup'>
            <div className="popup-content">
                <button className='popup-content-close-btn' onClick={closePopup}>close</button>
                <img src={currentDish.strMealThumb} alt="" />
                <h3 className='dish-name'>{currentDish.strMeal} <span>&#8377;100</span></h3>
                <div className="ingrediants">
                    <ul> 
                        <li>{currentDish.strIngredient1}</li>
                        <li>{currentDish.strIngredient2}</li>
                        <li>{currentDish.strIngredient3}</li>
                        <li>{currentDish.strIngredient4}</li>
                    </ul>
                </div>
                
                <button className='order-btn' onClick={()=>handleAddToCart(currentDish.strMealThumb,currentDish.strMeal)}>Order</button>
            </div>
        </div>
    );
}

export default Popup;