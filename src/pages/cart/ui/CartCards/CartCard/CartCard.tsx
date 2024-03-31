import React from "react";
import { DeviceInfo } from "../../../../../mock/mockData";
import styles from "./style.module.css";
import GarbageIcon from "../../../../../shared/ui/GarbageIcon";
import { useDispatch } from "react-redux";
import {
  decrease,
  deleteDevice,
  increase,
} from "../../../../../widgets/header/model/slice";

export function CartCard({
  device,
}: {
  device: DeviceInfo & { count: number };
}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.device}>
      <div className={styles.deviceTop}>
        <img src={device.img} alt="" className={styles.image} />
        <div className={styles.description}>
          <span className={styles.title}>{device.tittle}</span>
          <span className={styles.descriptionPrice}>{device.price} ₽</span>
        </div>
        <span
          onClick={() => {
            dispatch(deleteDevice(device.id));
          }}
        >
          <GarbageIcon width={20} height={17} />
        </span>
      </div>
      <div className={styles.deviceBottom}>
        <div className={styles.counter}>
          <div
            className={styles.minus}
            onClick={() => {
              dispatch(decrease(device.id));
            }}
          ></div>
          <span className={styles.count}>{device.count}</span>
          <div
            className={styles.plus}
            onClick={() => {
              dispatch(increase(device.id));
            }}
          ></div>
        </div>
        <span className={styles.price}>{device.price} ₽</span>
      </div>
    </div>
  );
}
