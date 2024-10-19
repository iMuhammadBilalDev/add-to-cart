import React, { useContext } from 'react';
import { CartContext } from '../context/Cart';

function Item(props) {
  const { items, setitems } = useContext(CartContext);
  
  const addItemToCart = () => {
    setitems(prevItems => [...prevItems, { name: props.name, price: props.price }]);
  };
console.log(items)
  return (
    <div  className="item">
      <h3>{props.name}</h3>
      <p>Price: $ {props.price}</p>
      <button onClick={addItemToCart}>Add To Cart</button>
    </div>
  );
}

export default Item;
