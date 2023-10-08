import Image from 'next/image';

export const metadata = {
  title: 'About',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};


export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <Image src="/aboutpageCocktail.jpg" alt="coctails" width={650} height={400} />

      <h2>Who We Are</h2>
        <p>Welcome to Saneha Gin official site, the ultimate destination for cocktail enthusiasts. Whether you're a budding bartender or a cocktail connoisseur, we've got something that will stir your interest. Our passion for quality cocktails is what drives us to deliver exceptional courses, premium gin, and high-end shaker sets that cater to all levels of expertise.</p>


    <h2>Our Mission</h2>
        <p>Our mission is to elevate your cocktail-making experience. We strive to blend the classic art of cocktail crafting with modern techniques to create a memorable and educational journey for all.</p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Expertise: With years of experience in the cocktail industry, we bring unparalleled knowledge and skills.</li>
        <li>Quality: Our products are carefully curated to meet the highest standards.</li>
        <li>Customer Focus: We're committed to providing exceptional customer service and a personalized shopping experience.</li>
      </ul>


    </div>

  );
}
