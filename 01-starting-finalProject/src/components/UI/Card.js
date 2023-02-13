import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  //   const classes = `{props.classeName}`;
  return (
    <div className={`${styles.card} ${props.classname}`}>{props.children}</div>
  );
};

export default Card;
