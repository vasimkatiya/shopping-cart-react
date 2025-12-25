import React, { useEffect, } from 'react'
import Card from '../components/Card'

const Product = ({Data,setData,erro,setErro,Loading,setLoading,Cart,setCart}) => {

  function addToCart(product)
  {
    setCart(prevCart=>{
      const exist = prevCart.find((item)=> item.id === product.id);
      if(exist) 
      {
        return prevCart.map((item)=>
        item.id === product.id ? {...item,quantity:item.quantity+1}
        :item
        );
      }
      else{
        return [...prevCart,{...product,quantity:1}]
      }
    })  
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