import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const expensesFilterHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value); //receive function as a prop from a parent and as an argument we  are sending the value back to the parent.
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={expensesFilterHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
