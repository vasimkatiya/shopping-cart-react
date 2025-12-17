import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
// import Footer from "./components/Footer"

const App = () => {
  // useState
  const [Data, setData] = useState([]);
  const [erro, setErro] = useState(null);
  const [Loading, setLoading] = useState(true);
  //cart useStates

  const [Cart, setCart] = useState([]);
  return (
    <>
      <Navbar Cart={Cart} />
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <div className="home">
      <div className="home-container">
        <img className="home-banner" src="/src/homebanner2.jpg" alt="" />
      </div>
    </div> */}
    </>
  );
};

export default App;
