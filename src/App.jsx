import React, { useState } from 'react';
import ProductList from './ProductList';
const App = () => {
  const [showProductList, setShowProductList] = useState(false);
  const handleGetStartedClick = () => { setShowProductList(true); };
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={handleGetStartedClick}>Get Started</button>
      {showProductList && <ProductList />}
    </div>
  );
};
export default App;
