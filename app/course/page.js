import '../singleProduct.module.scss';
import Image from 'next/image';
import AddItemButton from '../AddItemButton';

export const metadata = {
  title: 'Course',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function CoursePage() {
  return (
    <div>
      <h1 data-test-id="product-name">Cocktail course</h1>
      <Image
      src="/course.jpg"
      alt="coctailcourse"
      width={650}
      height={490}
      data-test-id="product-image"/>
      <AddItemButton />
      <div className="product-price"         data-test-id="product-price">
        290 €
      </div>
    </div>

  );
}
