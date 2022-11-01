import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022"); //now we send this handler as a prop t receive info from the child,
  //the child will send a selected year as and argument, and it will be set by the setter.
  //We also add a "selected" prop as a two way binding, to send a default value to a child so it can show it on the screen.
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={yearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
