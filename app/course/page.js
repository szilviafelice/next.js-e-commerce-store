import Image from 'next/image';

// import styles from './/sharedStyles.module.scss';

export const metadata = {
  title: 'Course',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function CoursePage() {
  return (
    <div>
      <h1>Cocktail course</h1>
      <Image src="/course.jpg" alt="coctailcourse" width={650} height={490} />
    </div>
  );
}
