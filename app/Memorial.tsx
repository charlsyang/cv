"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Memorial.module.css";

const Memorial = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.memorial}>
      <div className={styles.content}>
        <div
          className={`${styles.plateContainer} ${
            isClicked ? styles.clicked : ""
          }`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <Image
            src="/content/media/plate.png"
            alt="Memorial plate"
            width={96}
            height={96}
            className={styles.plate}
          />
        </div>
        <p className={`${styles.hiddenText}`}>
          Thank you &lt;3 <br />
          <a className={`${styles.link}`} href="https://andychung.me/">
            @andy
          </a>{" "}
          <br />{" "}
          <a
            className={`${styles.link}`}
            href="https://www.linkedin.com/in/mehdi-mulani-3972b8187/"
          >
            @mehdi
          </a>{" "}
          <br />{" "}
          <a className={`${styles.link}`} href="https://shen.land/">
            @shen
          </a>
        </p>
        <p className={styles.text}>
          In memory of <br /> Read.cv and Posts.cv
        </p>
      </div>
    </div>
  );
};

export default Memorial;
