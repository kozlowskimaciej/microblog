import React from "react";
import styles from "./styles/Logo.module.css";

export default function Logo() {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/icons/logo.png`}
      alt="logo"
      className={styles.logo}
    />
  );
}
