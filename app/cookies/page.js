import { getCookie } from '../../util/cookies';
import CartForm from './CartForm';

export default function SetcookiePage() {
  const getCookieValue = getCookie('cart');
    console.log(getCookieValue);
  // const parsedCookie = JSON.parse(getCookieValue);
    return (
      <>
      <div>Cookie value {getCookieValue} </div>
      <CartForm />
      </>
    );
}
