import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label }) => {
  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" />
      <span></span>
    </label>
  );
};

export default Checkbox;
