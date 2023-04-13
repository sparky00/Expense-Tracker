import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(Transaction => Transaction.amount);

  const income = amounts.filter((item) => item > 0)
  .reduce((acc, item)=> (acc += item), 0)
  .toFixed(2);

  const expense = (amounts.filter((item) => item < 0)
  .reduce((acc, item)=> (acc += item), 0)* -1)
  .toFixed(2);


  return (
    <div className="income-expense">
      <div className="incomex-left">
        <h6>INCOME</h6>
        <h3>+Rs.{income}</h3>
      </div>
      <div className="incomex-right">
        <h6>Expense</h6>
        <h3>-Rs.{expense}</h3>
      </div>
    </div>
  );
};
