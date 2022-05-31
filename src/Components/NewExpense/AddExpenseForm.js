import "./CSS/AddExpenseForm.css";
import { useState } from "react";
import State from "../../Modal.js";
/////////////////////////////////
const AddExpenseForm = (props) => {
  const [userInput, setUerInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUerInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUerInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUerInput((prevState) => {
      return {
        ...prevState,
        date: State.getCurrentDate(new Date(event.target.value)),
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpense(userInput);
    e.target.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input required type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step={"0.01"}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min={"2019 - 01 - 01"}
            max={new Date()}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
