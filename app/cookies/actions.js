'use server'

import { cookies } from 'next/headers';

export async function createCartCookie(cart) {
  const cartString = JSON.stringify(cart);
  await cookies().set('cart', cartString);
}

export async function getCartCookie() {
  const cartString = await cookies().get('cart');


  return JSON.parse(cartString || '[]');
}

export async function updateCartCookie(newValue) {
  const cartString = await cookies().get('cart');
  if (cartString === undefined) {
    await cookies().set('cart', cartString);

  }
  else {


  console.log({cartString: JSON.stringify(cartString.value)})
  const newValueStringified = JSON.stringify(newValue);
  await cookies().set('cart', JSON.stringify(cartString.value) + newValueStringified);
}}

export async function addItem(param) {
  await updateCartCookie(param)
}
