import React, { useState, useEffect, useContext } from 'react';
import SingleProduct from './SingleProduct.js';
import { Cart } from '../Context.js';

export default function CartPage({}) {
  const [total, setTotal] = useState([]);
  const { cart, setCart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <h2>My cart</h2>
      <h1>
        <p>Items in Cart </p>
        Total Amount :{total}
        {cart.map((product) => (
          <SingleProduct
            product={product}
            cart={cart}
            setCart={setCart}
            key={product.id}
          />
        ))}
      </h1>
      <p>Products in cart {}</p>
    </div>
  );
}
