import "./CSS/AddExpense.css";
import AddExpenseForm from "./AddExpenseForm.js";
import { useState } from "react";
///////////////////////////////
const AddExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  const addSaveExpenseHandler = (expenseData) => {
    const expenseObj = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(expenseObj);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <AddExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpense={addSaveExpenseHandler}
        />
      )}
    </div>
  );
};

export default AddExpense;
