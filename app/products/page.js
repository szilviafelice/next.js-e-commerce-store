import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products.js';

export const metadata = {
  title: 'Products',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <main>
      <h1 data-test-id="products-link">Our products</h1>
      <div className="image-grid">
        {products.map((product) => {
          return (
            <div key={`product-${product.id}`} className="product-item">
              <Image
                src={`/${product.id}.jpg`}
                width={500}
                height={325}
                alt={product.name}
              />
              <Link href={product.id}>{product.name}</Link>
</div>
        );
      })}
      </div>
    </main>

  );
}
