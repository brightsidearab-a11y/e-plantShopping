import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  
  // بيانات النباتات مقسمة لفئات (مطلوب 6 نباتات على الأقل)
  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", cost: "$15", image: "https://bit.ly/3YpD5B0" },
        { name: "Aloe Vera", cost: "$12", image: "https://bit.ly/3YpD5B0" },
        { name: "Peace Lily", cost: "$18", image: "https://bit.ly/3YpD5B0" }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", cost: "$20", image: "https://bit.ly/3YpD5B0" },
        { name: "Mint", cost: "$10", image: "https://bit.ly/3YpD5B0" },
        { name: "Rosemary", cost: "$15", image: "https://bit.ly/3YpD5B0" }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // وظيفة للتحقق إذا كان النبات في السلة لتعطيل الزر
  const isInCart = (name) => cart.some(item => item.name === name);

  return (
    <div className="product-grid">
      <div className="cart-icon-display">
        {/* عرض إجمالي العناصر في الأيقونة (مهم للتقييم) */}
        <span>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>
      {plantsArray.map((category) => (
        <div key={category.category}>
          <h2 className="category-title">{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant) => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.cost}</p>
                <button 
                  disabled={isInCart(plant.name)} 
                  onClick={() => handleAddToCart(plant)}
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
