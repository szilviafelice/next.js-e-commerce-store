import Image from 'next/image';

export const metadata = {
  title: 'Shaker set',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function ShakerPage() {
  return (
    <div>
      <h1>Rose gold Boston shaker set</h1>
      <Image
        src="/shaker.jpg"
        alt="bostonshaker"
        width={650}
        height={450}
      />
    </div>
  );
}
