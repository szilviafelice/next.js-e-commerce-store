import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        required
        data-test-id="checkout-first-name"
      />


      <button type="submit" data-test-id="checkout-confirm-order">Confirm Order</button>
    </form>
  );
}
