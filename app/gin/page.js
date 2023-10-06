import Image from 'next/image';

export const metadata = {
  title: 'Saneha gin',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function sanehaGin() {
  return (
    <div>
      <h1>Saneha Gin</h1>
      <Image
        src="/gin.jpg"
        alt="sanehabottle"
        width={650}
        height={410}
      />
    </div>
  );
}
