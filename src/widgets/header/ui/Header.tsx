import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../../../shared/ui/BasketIcon";
import HeartIcon from "../../../shared/ui/HeartIcon";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { selectToCart } from "../model/slice";
import { IconWrapper } from "./IconWrapper";

export function Header() {
  const { length } = useSelector(selectToCart);
  return (
    <header className={styles.header}>
      <Link to={"/"}>QPICK</Link>
      <nav className={styles.navigation}>
        <IconWrapper count={3}>
          <HeartIcon width={22} height={20}/>
        </IconWrapper>
        <IconWrapper count={length}>
          <Link to={"/cart"}>
              <BasketIcon width={22} height={20} className={styles.cartIcon} fill={"#000"}/>
          </Link>
        </IconWrapper>
      </nav>
    </header>
  );
}
