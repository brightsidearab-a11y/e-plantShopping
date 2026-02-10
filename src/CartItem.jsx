import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.name}>
          <span>{item.name} - {item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default CartItem;
