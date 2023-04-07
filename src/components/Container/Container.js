import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, width }) => {
  return (
    <div className={styles.Container}>
      <div style={{ maxWidth: `${width}px` }}>{children}</div>
    </div>
  );
};

export default Container;
