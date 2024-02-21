import React, { useEffect, useContext, useState } from 'react';
import SingleProduct from './SingleProduct.js';
import { Cart } from '../Context.js';

export default function Home() {
  const { cart, setCart } = useContext(Cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/Products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(cart);

  return (
    <div>
      <p>Home Page</p>
      {products.map((product) => {
        const isAdded = cart.includes(product);
        return (
          <SingleProduct
            isAdded={isAdded}
            product={product}
            // cart={cart}
            setCart={setCart}
            key={product.id}
          />
        );
      })}
    </div>
  );
}
