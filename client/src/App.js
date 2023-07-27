import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Wishlist from "./components/Wishlist";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Category from "./components/Category";
import Product from "./components/Product";
import Admin from "./components/Admin";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/admin" element={<Admin />} />
    </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;
