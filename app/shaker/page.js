'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import AddItemButton from '../AddItemButton';
import { addItem } from '../cookies/actions';

export default function Bostonshaker() {
  const [qty, setQty] = useState(1)
  const shakerObject = useMemo(()=> {
    return {
      type: 'Boston Shaker',
      qty,
      price: qty * 89,
    }
  },[qty]);

const addItemCallback = useCallback(()=> addItem(shakerObject),[shakerObject]
)

console.log({shakerObject});

  return (
    <div>
      <h1 data-test-id="product-name">Rose gold Boston shaker set</h1>
      <div
      className="product-image">
      <Image
        src="/shaker.jpg"
        alt="boston shaker"
        width={650}
        height={450}
        data-test-id="product-image"/>

      <div className="product-price"
      data-test-id="product-price">
        89 €

       <AddItemButton qty={qty} setQty={setQty} addItem={addItemCallback}/>
      </div>
    </div>
    </div>
  );

}
