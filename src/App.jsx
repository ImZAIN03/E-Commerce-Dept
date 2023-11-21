import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NewProducts from './pages/NewProducts';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/new-products" element={<NewProducts/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/my-account" element={<MyAccount/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App