import React,{useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const submitHandler = event => {
    event.preventDefault();
    props.ingredientshandler({title:name,amount:amount});
    setname("");
    setamount("");
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={name} onChange={(e)=>setname(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={(e)=>setamount(e.target.value)}  />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
