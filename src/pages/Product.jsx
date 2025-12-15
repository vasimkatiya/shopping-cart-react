import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import useData from '../customHook/DataHook'
// import { data } from 'react-router-dom';

const Product = () => {
    const [Data, setData] = useState([]);
    const [erro, setErro] = useState(null);
    const [Loading, setLoading] = useState(true);

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
      {Loading && <h2>Loading...</h2> }
      {erro && <h2>{erro.message}</h2> }

     {Data.length > 0 && 
     Data.map((ele)=>{
      return <Card key={ele.id} name={ele.title} price={ele.price} img={ele.image} />
     })}

    </div>
    </>
  )
}

export default Product