import React from 'react';

function AddToCart({cartitem}) {

    let cart = cartitem.map((item)=>{
        return(
            <div>
                <img src={item.img} alt='cartitem'/>
                <h6>{item.title}</h6>
            </div>
        )
    })
    return (
        <div className='add-to-cart-wrapper'>
            <div className='add-to-cart-item'>
                {cart}
            </div>
        </div>
    );
}

export default AddToCart;