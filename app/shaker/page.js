import Image from 'next/image';
import AddItemButton from '../AddItemButton';

export const metadata = {
  title: 'Shaker set',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function ShakerPage() {
  return (
    <div>
      <h1 data-test-id="product-name">Rose gold Boston shaker set</h1>
      <div
      className="product-image">
      <Image
        src="/shaker.jpg"
        alt="boston shaker"
        width={650}
        height={450}
        data-test-id="product-image"/>

      <div className="product-price"         data-test-id="product-price">
        89 €
       <AddItemButton />
      </div>
    </div>
    </div>
  );

}
