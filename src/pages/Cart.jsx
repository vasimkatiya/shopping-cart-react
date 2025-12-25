import React from 'react'
import AddCard from '../components/AddCard'

const Cart = ({Cart,setCart}) => {
  const updateQuantity = (id,qty) =>{
    setCart(prev=> 
      prev.map((item)=>item.id == id ? {...item,quantity:qty} : item
    )
    )
    console.log(Cart);
    
  }

  const removeItem = (id)=>{
    setCart(prev=> prev.filter(item=> item.id !== id));
  }

  const total = Cart.reduce((sum,item)=> sum + item.price * item.quantity ,0)

  return (
    <div className="cart-section">
      <div className="cart-con">
        {Cart.length > 0 ? Cart.map((ele)=>{
          return <AddCard key={ele.id}  img={ele.img} updateQuantity={updateQuantity} removeItem={removeItem} id={ele.id} price={ele.price} value={ele.quantity}  />
        }):<h1>empty cart</h1>}
      </div>
      <div className="total">
        {Cart.length > 0 && <h2>total : ${total}</h2>}
      </div>
    
    </div>
  )
}

export default Cart