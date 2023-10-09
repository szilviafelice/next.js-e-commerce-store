'use client';

import { useState } from 'react';
import styles from './AddItemButton.module.scss';

export default function AddItemButton({ addItem }) {
  const [quantity, setQuantity] = useState(1);;

  return (
    <div>
      <p>Qty</p>
      <select
        value={quantity}
        data-test-id="product-quantity"
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
        <button
        className={styles.addItemButton}
        data-test-id="product-add-to-cart"
        onClick={() => {
          addItem(quantity);
        }}
      >
       Add Item
      </button>
    </div>
  );
}
