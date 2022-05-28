import Expenses from "./Components/Expenses/Expenses.js";
import State from "./Modal.js";
import AddExpense from "./Components/NewExpense/AddExpense.js";
import { useState } from "react";

export default function App(props) {
  const [expenses, setExpense] = useState(State.expense);

  const addExpenseHandler = (expenseObj) => {
    setExpense((prevExpense) => [expenseObj, ...prevExpense]);
    State.expense.push(expenseObj);
    console.log(State.expense);
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}
