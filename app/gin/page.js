'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import AddItemButton from '../AddItemButton';
import { addItem } from '../cookies/actions';

/* export const metadata = {
  title: 'Saneha gin',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};*/

export default function SanehaGin() {
  const [qty, setQty] = useState(1)
  const ginObject = useMemo(()=> {
    return {
      type: 'Saneha Gin',
      qty,
      price: qty * 39.90,
    }
  },[qty]);

const addItemCallback = useCallback(()=> addItem(ginObject),[ginObject]
)

console.log({ginObject});

  return (
    <div>
      <h1 data-test-id="product-name">Saneha Gin 40% vol. 0,70l</h1>
      <div
      className="product-image">
      <Image
        src="/gin.jpg"
        alt="saneha gin bottle"
        width={650}
        height={410}
        data-test-id="product-image"/>
      <div className="product-price"         data-test-id="product-price">
        39,90 €
        <AddItemButton qty={qty} setQty={setQty} addItem={addItemCallback}/>
      </div>
    </div>
    </div>
  );
}
