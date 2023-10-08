import '../singleProduct.module.scss';
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
      <h1 data-test-id="product-name">Saneha Gin</h1>
      <Image
        src="/gin.jpg"
        alt="sanehabottle"
        width={650}
        height={410}
        data-test-id="product-image"/>
      <div className="product-price"         data-test-id="product-price">
        39,90 €
       <AddItemButton />
      </div>
    </div>
  );
}
