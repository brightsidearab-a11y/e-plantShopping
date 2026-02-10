import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
const ProductList = () => {
  const dispatch = useDispatch();
  const plants = [{ name: 'Snake Plant', cost: '$15', image: 'https://example.com/snake.jpg' }];
  return (
    <div>
      {plants.map(p => (
        <div key={p.name}>
          <h3>{p.name}</h3>
          <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
