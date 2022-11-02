import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const dataPoints = [
    { label: "Jan", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Apr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Aug", value: "0" },
    { label: "Sep", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nov", value: "0" },
    { label: "Dec", value: "0" },
  ];

  for (const expense of props.expenses) {
    // for... of- array, for...in is used with objects
    const expenseMonth = expense.date.getMonth(); //date is an object, starting at 0=Jan, which is equal to index
    const chartDataPoints = ([expenseMonth].value += expense.amount); //We can use expenseMonth as an index with the [] notation, notice the += notation, we want to update the value by adding sth to it- increse it by the expense maount

    return <Chart dataPoints={chartDataPoints} />;
  }
};

export default ExpensesChart;
