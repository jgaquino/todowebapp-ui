import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder }) => {
  return <input className={styles.Input} placeholder={placeholder} />;
};

export default Input;
