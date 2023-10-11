import Image from 'next/image';
import AddItemButton from '../AddItemButton';

export const metadata = {
  title: 'Saneha gin',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function sanehaGin() {
  return (
    <div>
      <h1 data-test-id="product-name">Saneha Gin 40% vol. 0,70l</h1>
      <div
      className="product-image">
      <Image
        src="/gin.jpg"
        alt="saneha gin bottle"
        width={650}
        height={410}
        data-test-id="product-image"/>
      <div className="product-price"         data-test-id="product-price">
        39,90 €
       <AddItemButton />
      </div>
    </div>
    </div>
  );
}
