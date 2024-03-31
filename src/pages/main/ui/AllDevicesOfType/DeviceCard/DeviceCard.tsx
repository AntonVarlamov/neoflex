import React from "react";
import { DeviceInfo } from "../../../../../mock/mockData";
import styles from "./style.module.css";
import { StarIcon } from "../../../../../shared/ui/StarIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../widgets/header/model/slice";

export function DeviceCard({ device }: { device: DeviceInfo }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.device}>
      <img className={styles.image} src={device.img} alt="" />
      <div className={styles.allInfo}>
        <div className={styles.info}>
          <span className={styles.title}>{device.tittle}</span>
          <div className={styles.prices}>
            <span className={styles.price}>{device.price} ₽</span>
            {!!device.oldPrice && (
              <div className={styles.oldPrice}>{device.oldPrice} ₽</div>
            )}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.rate}>
            <StarIcon width={23} height={22} />
            <span>{device.rate}</span>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(addToCart(device));
            }}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
