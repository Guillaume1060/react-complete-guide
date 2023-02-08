// Ci dessous we import our CSS file
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // ReactHook (here useState) must be call inside a component function
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    // Below JSX format (similar but not equal to Html)
    // One route element expected to run (need an unique parent!)
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* We use className i/o class */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
