import "./CSS/Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import { useState } from "react";
import ExpenseContent from "./ExpenseContent.js";

export default function Expenses(props) {
  const [filterYear, SetFilterYear] = useState("2022");

  const filteredYearHandler = (year) => {
    SetFilterYear(year);
  };

  const filterExpense = props.expense.filter(
    (expense) => expense.date.split(" ")[2] === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} filteredYear={filteredYearHandler} />
      <ExpenseContent item={filterExpense} />
    </Card>
  );
}
