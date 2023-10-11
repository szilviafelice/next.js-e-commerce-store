import Image from 'next/image';
import { useState } from 'react';
import AddItemButton from '../AddItemButton';

export const metadata = {
  title: 'Course',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function CoursePage() {
  const [cart, setCart] = useState([]);

  const addItem = (quantity) => {
    console.log(`Added ${quantity} items to cart.`);
  };

  return (
    <div>
      <h1 data-test-id="product-name">Cocktail course</h1>
      <div
      className="product-image">
      <Image
      src="/course.jpg"
      alt="cocktail setup"
      width={650}
      height={490}
      data-test-id="product-image"/>
      <AddItemButton addItem={addItem} />
      <div className="product-price"
      data-test-id="product-price">
        290 €
      </div>
    </div>
    </div>
  );
}
