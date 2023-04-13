import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
 
  const{addTransaction} = useContext(GlobalContext);
  
  const onSubmit = e =>{
    e.preventDefault();

    const newTransaction ={
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <div className='add-transction'>
      <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlform-label">Text</label><br/>
    <input type="text" className="htmlform-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange={(e)=>setText(e.target.value)} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlform-label">
      Amount <br/>
      (negative - expense, positive - income)
    </label><br/>
    <input type="number" className="htmlform-control" id="exampleInputPassword1" value={amount} onChange={(e)=> setAmount(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<br/>
    </div> 
  )
}
