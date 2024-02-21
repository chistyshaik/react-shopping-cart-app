import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Context.js';

export default function Header() {
  const { cart } = useContext(Cart);

  return (
    <div>
      <p>Shopping App</p>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
}
