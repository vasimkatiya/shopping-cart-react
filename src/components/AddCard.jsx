import React from 'react'
import {Ban} from 'lucide-react'

const AddCard = ({img,price,value,id,removeItem,updateQuantity}) => {
  return (
    <div className="add-card">
        <span>{id}</span>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <h2 className='price'>price : ${price}</h2>
        <div className="btns">

        <button className='qty' onClick={()=>{
            value < 20 && updateQuantity(id,value+1)
        }}>+</button>
        <input type="number" value={value} onChange={(e)=>{
            updateQuantity(id,Number(e.target.value))
        }} />
        <button className='qty' onClick={()=>{
            value > 1 &&  updateQuantity(id,value-1)
        }}>-</button>
        <button className="remove" onClick={()=>{
            removeItem(id);
        }}><Ban /></button>
        </div>
    </div>
  )
}

export default AddCard