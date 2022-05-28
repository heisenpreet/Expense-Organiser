import "./CSS/ExpenseContent.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseContent = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpenseContent;
