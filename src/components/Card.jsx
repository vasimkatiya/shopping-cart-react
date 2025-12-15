import React from 'react'

const Card = ({img,name,price}) => {
  return (
    <>
    <div className="item-card">
        <div className="item-img">
            <img src={img} alt="" />
        </div>
        <div className="item-name">
            <h2>{name} </h2>
        </div>
        <div className="item-price">
            <h3>${price} </h3>
        </div>
        <button className="add-cart-btn">
            add to cart
        </button>
    </div>
    </>
  )
}

export default Card