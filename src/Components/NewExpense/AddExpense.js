import "./CSS/AddExpense.css";
import AddExpenseForm from "./AddExpenseForm.js";

///////////////////////////////
const AddExpense = (props) => {
  const addSaveExpenseHandler = (expenseData) => {
    const expenseObj = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(expenseObj);
  };

  return (
    <div className="new-expense">
      <AddExpenseForm onSaveExpense={addSaveExpenseHandler} />
    </div>
  );
};

export default AddExpense;
