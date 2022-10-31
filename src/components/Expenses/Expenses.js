import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

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
  let expenseContent = <p>No expense content found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={yearChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
