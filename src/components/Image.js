import React from "react";
import styles from "./Image.module.css";

const Image = ({ onClick, src, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} ${styles.main}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default Image;
