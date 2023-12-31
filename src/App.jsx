import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { app,auth } from './Firebase';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NewProducts from './pages/NewProducts';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import CheckOut from './pages/CheckOut';
import PayNow from './pages/PayNow';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };
// console.log(app)
// console.log(auth)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/new-products"
          element={<NewProducts addToCart={addToCart} cartItems={cartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/checkout" element={<CheckOut cartItems={cartItems} />} />
        <Route path="/pay-now" element={<PayNow />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
