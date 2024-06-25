import React, { FC } from "react";
import styles from "./Section.module.css";
import classNames from "classnames";
import { text } from "stream/consumers";

interface Section {
    heading: string;
}

export const Section: FC<Section> = ({heading}) => {
  return (
    <h1>{heading}</h1>
  );
};