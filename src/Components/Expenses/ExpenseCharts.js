import Charts from "../Charts/Charts.js";

const ExpenseCharts = (props) => {
  const ChartDatapoints = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];

  props.expense.forEach((element) => {
    const expenseMonth = new Date(element.date).getMonth();
    ChartDatapoints[expenseMonth].value += element.amount;
  });

  return <Charts dataPoints={ChartDatapoints} />;
};

export default ExpenseCharts;
