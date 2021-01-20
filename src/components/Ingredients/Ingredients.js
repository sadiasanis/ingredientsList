import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngri, setuserIngri] = useState([])

  const ingredientshandler = (ingridients)=>{
  setuserIngri(prev=>[...prev, {id: Math.random().toString(), ...ingridients}])}
    
  const removeHandler=(id)=>{
    setuserIngri(prev=>[...prev.filter((ing)=>ing.id !==id)])
  }


  return (
    <div className="App">
      <IngredientForm ingredientshandler={ingredientshandler}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngri} onRemoveItem={removeHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
