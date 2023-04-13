import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const{deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-': '+'; 

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
          {transaction.text}
          <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
          <button type="button" className="btn btn-danger" onClick={()=> deleteTransaction(transaction.id)}>
            X
          </button>
        </li> 
  )
}
   