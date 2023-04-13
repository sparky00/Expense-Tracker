   import React,{useContext} from 'react'
   import { GlobalContext } from '../context/GlobalState'
   

   export const Balance = () => {
      const {transactions} = useContext(GlobalContext);
      const amounts = transactions.map(Transaction => Transaction.amount);
      const total = amounts.reduce((acc, item) =>(acc += item),0).toFixed(2);


     return (
        
        <div className='balance-component'>
         <br/>
         <h5>Your Balance</h5>
         <h2>Rs.{total}</h2>
        </div>
     
      

     )
   }
  