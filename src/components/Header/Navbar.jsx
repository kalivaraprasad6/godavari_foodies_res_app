import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);

  const Navdata = [
    {
      item: 'Home',
      cName: 'navitem',
      path: '/home',
    },
    {
      item: 'About',
      cName: 'navitem',
      path: '/about',
    },
    {
      item: 'SignUp',
      cName: 'navitem',
      path: '/signup',
    },
    {
      item: 'Contact',
      cName: 'navitem',
      path: '/contact',
    },
    {
      item: 'Cart',
      cName: 'navitem',
      path: '/cart',
    },
  ];
  return (
    <div className='navbar'>
      <Link
        to='/'
        className='logo'>
        GF
      </Link>
      <ul className='nav-strip'>
        {Navdata.map((item, index) => (
          <li
            key={index}
            className={`nav-list ${item.cName}`}>
            {item.item === 'Cart' ? (
              <div className='cart-link-wrapper'>
                <Link
                  to={item.path}
                  className='nav-link'>
                  {item.item}
                </Link>
                <span className='cart-count'>{cartItems.length}</span>
              </div>
            ) : (
              <Link
                to={item.path}
                className='nav-link'>
                {item.item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
