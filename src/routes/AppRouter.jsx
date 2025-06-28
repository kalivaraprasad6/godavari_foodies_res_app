import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import SignUp from '../pages/SignUp';
import PageNotFound from '../pages/PageNotFound';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Navbar />

        <div className='main-content'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/home'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='/signup'
              element={<SignUp />}
            />
            <Route
              path='*'
              element={<PageNotFound />}
            />
            <Route
              path='/login/dashboard'
              element={<Dashboard />}
            />
            <Route
              path='/orders'
              element={<Orders />}
            />
            <Route
              path='/users/login'
              element={<Login />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
