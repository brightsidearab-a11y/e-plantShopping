import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
const ProductList = () => {
  const dispatch = useDispatch();
  const plants = [
    { name: 'Snake Plant', cost: '$15', image: 'https://bit.ly/3YpD5B0' },
    { name: 'Aloe Vera', cost: '$12', image: 'https://bit.ly/3YpD5B0' },
    { name: 'Peace Lily', cost: '$18', image: 'https://bit.ly/3YpD5B0' },
    { name: 'Spider Plant', cost: '$10', image: 'https://bit.ly/3YpD5B0' },
    { name: 'Rubber Plant', cost: '$25', image: 'https://bit.ly/3YpD5B0' },
    { name: 'ZZ Plant', cost: '$22', image: 'https://bit.ly/3YpD5B0' }
  ];
  return (
    <div className="product-list">
      {plants.map(p => (
        <div key={p.name} className="product-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.cost}</p>
          <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
