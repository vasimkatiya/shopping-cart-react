
import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Home from "./pages/Home"
// import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    {/* <div className="home">
      <div className="home-container">
        <img className="home-banner" src="/src/homebanner2.jpg" alt="" />
      </div>
    </div> */}
    </>
  )
}

export default App