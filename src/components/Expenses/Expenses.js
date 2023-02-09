import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((element) => (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          OnSelectYear={selectFilteredYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
