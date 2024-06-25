import React, { FC } from "react";
import styles from "./Education.module.css";
import classNames from "classnames";
import { text } from "stream/consumers";

interface Education {
    logo: string;
    school: string;
    start: number;
    end: number;
    program: string;
    link: string;
}

export const Education: FC<Education> = ({logo, school, start, end, program, link}) => {
  return (
    <div>
        <img src={logo} className={styles.logo} alt="VUT FIT logo"/>
        <h1>{school}</h1>
        <h2>{start}-{end}</h2>
        <p>{program}</p>
        <p>Visit school website <a href={link} target="blank">here</a></p>
    </div>
  );
};