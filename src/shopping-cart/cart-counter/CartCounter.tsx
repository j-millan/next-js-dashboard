'use client';

import { useState } from "react";
import styles from "./CartCounter.module.css";

interface CartCounterProps {
  initialItems: number;
}

export const CartCounter = ({ initialItems = 0 }: CartCounterProps) => {
  const [itemCount, setItemCount] = useState(initialItems);

  const addItem = () => {
    setItemCount(itemCount + 1);
  };

  const removeItem = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <>
      <p className={styles.count}>{itemCount}</p>
      <div className={styles.buttons}>
        <button onClick={removeItem} className={styles["remove-button"]}>
          Remove item
        </button>
        <button onClick={addItem} className={styles["add-button"]}>
          Add item
        </button>
      </div>
    </>
  );
};
