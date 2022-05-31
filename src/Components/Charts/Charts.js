import ChartBar from "./ChartBar.js";
import "./CSS/charts.css";

const Charts = (props) => {
  const dataPointsValues = props.dataPoints.map((el) => el.value);
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoints) => (
        <ChartBar
          value={datapoints.value}
          label={datapoints.label}
          key={datapoints.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Charts;
