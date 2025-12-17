import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import useData from '../customHook/DataHook'
// import { data } from 'react-router-dom';

const Product = ({Data,setData,erro,setErro,Loading,setLoading,Cart,setCart}) => {
    // const [Data, setData] = useState([]);
    // const [erro, setErro] = useState(null);
    // const [Loading, setLoading] = useState(true);
  // const [Cart, setCart] = useState([]);

  //add to cart function //

  function addToCart(product)
  {
    // const newCart = Cart.filter((cart)=>cart.id !== product.id);
    const Exist = Cart.find((item)=>item.id == product.id);

    if(!Exist){

      setCart(prev=>[...prev,product])
    }
    console.log("product ",product);
    
    // console.log("cart ",Cart);
    
  }

  useEffect(() => {
   console.log("cart update",Cart);
   
  }, [Cart])
  

     useEffect(() => {
        const fetchData = async () =>{
      try{
        const res = await fetch(`https://fakestoreapi.com/products`);

        if(res.status >=400)
        {
           throw new Error("server can't fetch data");
           return ;
        }

        const fetchData = await res.json();
        console.log(fetchData);

        setTimeout(() => {
          setData(fetchData);
        setLoading(false);
        }, 3500);
      }catch(err)
      {
        setErro(err);
        setLoading(false);
      }
    }
    fetchData();
    }, []);
    




  return (
    <>
    <div className="product-con">
      {Loading && <h2 className='loading'>Loading...</h2> }
      {erro && <h2>{erro.message}</h2> }

     {Data.length > 0 && 
     Data.map((ele)=>{
      return <Card key={ele.id} price={ele.price} id={ele.id} addToCart={addToCart} img={ele.image} />
     })}

    </div>
    </>
  )
}

export default Product