// eslint-disable-next-line no-restricted-syntax
'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import AddItemButton from '../AddItemButton';
import { addItem } from '../cookies/actions';

/* export const metadata = {
  title: 'Art deco set',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
}; */

export default function HighballGlass() {
  const [qty, setQty] = useState(1)
  const glassObject = useMemo(()=> {
    return {
      type: 'Highball Glasses',
      qty,
      price: qty * 79,
    }
  },[qty]);

const addItemCallback = useCallback(()=> addItem(glassObject),[glassObject]
)

console.log({glassObject});
  return (
    <div>
      <h1 data-test-id="product-name">Vintage Art Deco Highball Glasses</h1>
      <p>Vintage Art Deco 1920s' | Set of 4 </p>
      <div
      className="product-image">

      <Image
        src="/glass.jpg"
        alt="highball glasses"
        width={650}
        height={490}
        data-test-id="product-image"/>
      <div className="product-price"
           data-test-id="product-price">
        79 €
        <AddItemButton qty={qty} setQty={setQty} addItem={addItemCallback}/>
      </div>
    </div>
    </div>
  );
}
