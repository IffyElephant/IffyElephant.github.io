import React, { FC } from "react";
import styles from "./Menu.module.css";
import { text } from "stream/consumers";

interface Menu {
}

export const Menu: FC<Menu> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.portrait} onClick={() => {window.scrollTo(0,0)}}>
        <img className={styles.img} src="profile-pic.jpg" alt="moja krasnucka fotecka nehehe"/>
        <h1 className={styles.h1}>Šimon <span className={styles["last-name"]}>Hrúz</span></h1>
      </div>
      <nav>
        <a className={styles.link} href="#education">Education</a>
        <a className={styles.link} href="#experience">Experience</a>
        <a className={styles.link} href="#about-me">About Me</a>
        <a className={styles.link} href="#contact">Contact</a>
      </nav>
    </div>
  );
};