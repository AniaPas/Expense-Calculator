import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //This method only accepts numbers separated by a coma, list of argument
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.value}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
