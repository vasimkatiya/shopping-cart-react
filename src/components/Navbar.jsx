import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'lucide-react'

const Navbar = () => {
  return (
    <div className="nav-con">

    <div className="navbar">
        <div className="logo">
            <h1 className='dif-font'>V</h1><h1 style={{color:'white'}}>asi</h1><h1 className='dif-font'>M</h1><h1 style={{color:'white'}}>art</h1>
        </div>
        <nav>
            <Link className='nav-link' style={{color:'white'}} to='/'>home</Link>
            <Link className='nav-link' style={{color:'white'}} to='/product'>products</Link>
            <Link className='nav-link' style={{color:'white'}} to='/cart' ><span><ShoppingCart /></span>cart</Link>
        </nav>
    </div>
    </div>
  )
}

export default Navbar