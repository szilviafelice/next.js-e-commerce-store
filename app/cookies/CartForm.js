'use client'

import { useState } from 'react';
import { createCartCookie } from './actions';

export default function CartForm({ existingCart }) {
  const [cart, setCart] = useState(existingCart);



  return (
    <form>
      <input
      value={cart}
      onChange={(event) => setCart(event.currentTarget.value)}
      />
      <button formAction={async () => await createCartCookie(cart)}>
      Set Cookie
      </button>
    </form>
  );
}
