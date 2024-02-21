import React, { useContext, memo } from 'react';
import { Cart } from '../Context.js';

function SingleProduct({ product, isAdded, setCart }) {
  console.log('fgh');

  return (
    <div>
      <div
        key={product.id}
        style={{
          border: '2px solid black',
          margin: '5px',
          padding: '15px',
          maxWidth: '300px',
        }}
      >
        <img
          src={product.images[0]}
          style={{ maxWidth: '200px', maxHeight: '150px' }}
        />
        <li>{product.title}</li>
        <p>{product.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Rs. {product.price} /-</span>
          <div>
            {isAdded ? (
              <button
                onClick={() => {
                  setCart((prevcart) =>
                    prevcart.filter((c) => c.id !== product.id)
                  );
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => {
                  setCart((prevcartItems) => [...prevcartItems, product]);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleProduct);
