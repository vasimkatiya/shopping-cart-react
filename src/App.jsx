import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [Data, setData] = useState([]);
  const [erro, setErro] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  
  return (
    <>
      <Navbar Cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Product
              Data={Data}
              setData={setData}
              erro={erro}
              setErro={setErro}
              Loading={Loading}
              setLoading={setLoading}
              Cart={Cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<Cart Cart={cart} setCart={setCart}/>} />
      </Routes>
      
    </>
  );
};

export default App;
