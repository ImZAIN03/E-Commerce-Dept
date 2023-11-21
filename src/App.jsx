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

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App