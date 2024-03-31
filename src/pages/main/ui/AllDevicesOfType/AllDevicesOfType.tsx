import React from "react";
import { DeviceInfo } from "../../../../mock/mockData";
import { DeviceCard } from "./DeviceCard/DeviceCard";
import styles from "./style.module.css"

export function AllDevicesOfType({
  name,
  devices,
}: {
  name: string;
  devices: DeviceInfo[];
}) {
  return (
    <section className={styles.section}>
      <span className={styles.title}>{name}</span>
      <div className={styles.devices}>
        {devices.map((device) => (
            <DeviceCard device={device} key={device.id}/>
        ))}
      </div>
    </section>
  );
}
