import React from "react";
import { DeviceInfo } from "../../../../mock/mockData";
import { CartCard } from "./CartCard/CartCard";
import styles from "./style.module.css"

export function CartCards({
  devices,
}: {
  devices: { [key: string]: DeviceInfo & { count: number } };
}) {
  return (
    <div className={styles.devices}>

      {Object.values(devices).map((device) => (
        <CartCard device={device} key={device.id} />
      ))}
    </div>
  );
}
