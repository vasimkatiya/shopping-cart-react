import React from 'react'
import {ShoppingBag} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className="home">
      <div className="home-container">
        <img className="home-banner" src="/src/homebanner2.jpg" alt="" />
        <div className="home-content">
            <h1><span className='dif-welcome' style={{color:'black'}}>welcome</span>to VasiMart</h1>
            <h2>we have a branded and best quality products.</h2>
            <h2>if you want to buy the product click on the button bellow mentioned</h2>
            <button className='shop-now' onClick={()=>{
                navigate('/product')
            }}>
                shop now <span><ShoppingBag /></span>
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home