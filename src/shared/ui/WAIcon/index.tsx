import React from "react";
import { HandySvg } from "handy-svg";
import icon from "./icon.svg";

type IconType = { [key: string]: string | number | undefined };
export default function WAIcon({ ...props }: IconType) {
  return <HandySvg src={icon} {...props} />;
}