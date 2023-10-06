import Image from 'next/image';
import Link from 'next/link';
import GenerateButton from './GenerateButton';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the jungle of senses</h1>

      <Image src="/plants.jpg" alt="plants" width={1000} height={853} />


      <GenerateButton />
    </main>
  );
}
