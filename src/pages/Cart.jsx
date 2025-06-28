import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, clearCart } from '../store/slices/cartSlice.js';
import { placeOrder } from '../store/slices/ordersSlice.js';
import Practice from '../components/Practice.jsx';
import Modal from '../components/Modals/Modal.jsx';
import '../styles/cart.css';
import '../styles/contact.css';
export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);
  const handleRemove = id => {
    dispatch(removeFromCart({ id }));
  };

  const handleProceedOrders = () => {
    if (cartItems.length === 0) {
      alert('No items in cart');
    } else {
      dispatch(placeOrder(groupedItems)); // use groupedItems here
      dispatch(clearCart());
      // Modal
      setShowModal(true);
    }
  };
  return (
    <div>
      <h2 className='cart-heading'>Cart 🛒 </h2>
      {cartItems.length === 0 ? (
        <p className='noCart-items'>No items in cart</p>
      ) : (
        <ul className='cart-list'>
          {groupedItems.map((item, index) => (
            <li
              className='cart-item'
              key={index}>
              {item.name} : - ({item.quantity} qty)
              <button
                className='remove-button'
                onClick={() => handleRemove(item.id)}
                style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <Modal
          title='Order Placed'
          content='Your order has been placed successfully!'
          onClose={() => {
            setShowModal(false);
            navigate('/orders');
          }}
        />
      )}
      <button
        className='orderProceed'
        onClick={() => {
          handleProceedOrders();
          setShowModal(true);
        }}>
        Order
      </button>
      <Practice />
    </div>
  );
}
