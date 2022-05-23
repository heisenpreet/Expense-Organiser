import Expenses from "./Components/Expenses/Expenses";
import State from "./State";

export default function App() {
  return <Expenses expense={State.expense} />;
}
