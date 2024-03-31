import React from "react";
import { useSelector } from "react-redux";
import { selectToCart } from "../../../widgets/header/model/slice";
import { CartCards } from "./CartCards/CartCards";
import {ToPurchase} from "./ToPurchase/ToPurchase";
import styles from "./style.module.css"

export function Main() {
  const { devices, length, sum } = useSelector(selectToCart);

  return (
    <main >
      {!length ? (
        <h1>Корзина пуста</h1>
      ) : (
        <div className={styles.main}>
          <span className={styles.header}>Корзина</span>
          <div className={styles.cart}>
            <CartCards devices={devices} />
            <ToPurchase sum={sum}/>
          </div>
        </div>
      )}
    </main>
  );
}
