import React from 'react';
import { useSelector } from 'react-redux';

export default function Orders() {
  const orders = useSelector(state => state.orders.items);
  return (
    <div>
      <h2>🧾 Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((item, index) => (
            <li key={index}>
              {item.name} - {item.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
