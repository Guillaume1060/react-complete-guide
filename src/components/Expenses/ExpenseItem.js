// Ci dessous we import our CSS file
import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    // Below JSX format (similar but not equal to Html)
    // One route element expected to run (need an unique parent!)
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* We use className i/o class */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
