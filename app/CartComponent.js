
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartComponent() {

  const [cart, setCart] = useState([
    { id: 'gin', name: 'Saneha Gin', price: 39.90, quantity: 1 },
    { id: 'shaker', name: 'Boston Shaker Set', price: 89, quantity: 1 },
    { id: 'glass', name: 'Highball Glass Set', price: 79, quantity: 1 },
    { id: 'course', name: 'Cocktail course', price: 290, quantity: 1 },
  ]);
  const router = useRouter();

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  return (
    <div>
      {cart.map((product) => (
        // eslint-disable-next-line no-restricted-syntax
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.quantity}</span>
          <span>{product.price * product.quantity}</span>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <div>Total: {totalPrice}</div>
      <button onClick={() => router.push('/checkout')}>Checkout</button>
    </div>
  );
      }
