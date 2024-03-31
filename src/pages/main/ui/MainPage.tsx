import React from "react";
import { Header } from "../../../widgets/header";
import { Devices } from "./Devices";
import { Footer } from "../../../widgets/footer";

export function MainPage() {
  return (
    <>
      <Header />
      <Devices />
      <Footer />
    </>
  );
}
