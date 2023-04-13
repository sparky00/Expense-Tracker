import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  

  return (
    <div className="transcation-component">
      <h4 id="hh">History </h4>
      <ul className="list-group">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
        
      </ul>
    </div>
  );
};

