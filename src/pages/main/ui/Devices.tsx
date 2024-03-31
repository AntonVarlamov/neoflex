import React, { useEffect, useState } from "react";
import { mockData, DataType } from "../../../mock/mockData";
import Loader from "react-ts-loaders";
import { AllDevicesOfType } from "./AllDevicesOfType/AllDevicesOfType";
import styles from "./style.module.css";

export function Devices() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [devices, setDevices] = useState<DataType[]>([]);
  useEffect(() => {
    if (devices.length) {
    }
  }, [devices]);

  useEffect(() => {
    setTimeout(() => {
      setDevices(mockData);
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Loader type="dotspinner" color="#838383" size={100} />
      ) : (
        <>
          {devices.map(([typeName, typeDevices]) => (
            <AllDevicesOfType
              name={typeName}
              devices={typeDevices}
              key={typeName}
            />
          ))}
        </>
      )}
    </main>
  );
}
