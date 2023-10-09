import CartComponent from '../CartComponent';

export const metadata = {
  title: 'Cart',
  description:
  'Shopping cart',
};

export default function CartPage() {
  return (
    <div>
      <h1>Cart</h1>
      <CartComponent />
    </div>
  );
}
