'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import AddItemButton from '../AddItemButton';
import { addItem } from '../cookies/actions';

/* export const metadata = {
  title: 'Course',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
}; */

export default function CocktailCourse() {
  const [qty, setQty] = useState(1)
  const courseObject = useMemo(()=> {
    return {
      type: 'Cocktail Course',
      qty,
      price: qty * 290,
    }
  },[qty]);

  const addItemCallback = useCallback(()=> addItem(courseObject),[courseObject]
)

console.log({courseObject});
  return (
    <div>
      <h1 data-test-id="product-name">Cocktail course</h1>
      <div
      className="product-image">
      <Image
      src="/course.jpg"
      alt="cocktail setup"
      width={650}
      height={490}
      data-test-id="product-image"/>
      <div className="product-price"
      data-test-id="product-price">

        290 €

        <AddItemButton qty={qty} setQty={setQty} addItem={addItemCallback}/>
      </div>
    </div>
    </div>
  );
}
