
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartComponent() {

  const [cart, setCart] = useState([]);
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
         <div key={product.id} data-test-id={`cart-product-${product.id}`}>
          <span>{product.name}</span>
          <span data-test-id={`cart-product-quantity-${product.id}`}>{product.quantity}</span>
          <span>{product.price * product.quantity}</span>
          <button data-test-id={`cart-product-remove-${product.id}`} onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
          </div>
      ))}
      <div>Total: {totalPrice}</div>
      <button onClick={() => router.push('/checkout')}>Checkout</button>
    </div>
  );
      }
