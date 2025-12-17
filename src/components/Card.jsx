// import React, { useState } from 'react'

const Card = ({img,name,price,id,addToCart}) => {
    
    // const clickHandler = (e) =>{
    //     console.log('hello');
        
        
    // }
  return (
    <>
    <div className="item-card">
        <div className="item-img">
            <img src={img} alt="" />
        </div>
        <div className="item-name">
            <h2>{id} </h2>
        </div>
        <div className="item-price">
            <h3>${price} </h3>
        </div>
        <button className="add-cart-btn" onClick={()=>{
            addToCart({img,id,price})
        }}>
            add to cart
        </button>
    </div>
    </>
  )
}

export default Card