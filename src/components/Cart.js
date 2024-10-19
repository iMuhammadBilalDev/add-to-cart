import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';

function Cart() {
  const { items } = useContext(CartContext);
  const totalBill = items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart"> 
      <h1>Total Bill</h1>
      <ul>
        {items.map((item,i ) => (
          <li key={i}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h5>Total Bill: ${totalBill}</h5>
    </div>
  );
}

export default Cart;


