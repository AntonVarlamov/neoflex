import React from "react";
import styles from "./style.module.css";

export function ToPurchase({ sum }: { sum: number }) {
  return (
    <div className={styles.purchase}>
      <div className={styles.info}>
        <span>ИТОГО</span>
        <span>₽ {sum}</span>
      </div>
      <button className={styles.button}>Перейти к оформлению</button>
    </div>
  );
}
