import React from "react";
import styles from "./style.module.css";

export function IconWrapper({
  count,
  children,
}: {
  count: number;
  children: any;
}) {
  return (
    <div className={styles.icon}>
      {children}
      {!!count && <div className={styles.wrapper}>{count}</div>}
    </div>
  );
}
