import React, { useState, useEffect } from 'react';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngri, setuserIngri] = useState([])
useEffect(() => {
  fetch("https://addingredients-837ac-default-rtdb.firebaseio.com/AddIngredients.json")
.then(response => response.json()
).then(responseData =>{
  const loadedingredients =[];
  for (const key in responseData){
    loadedingredients.push(
      {id:key,
      title:responseData[key].title,
      amount:responseData[key].amount}); 
  };

  setuserIngri(loadedingredients);
  } );   

}, []);

  const ingredientshandler = (ingridients)=>{
    fetch("https://addingredients-837ac-default-rtdb.firebaseio.com/AddIngredients.json",
    {method:"POST",
    body: JSON.stringify(ingridients),
    headers:{'Content-Type':"application/json"}
}).then(response =>{
  return response.json();
}).then(responseData =>{
  setuserIngri(prev=>[...prev, {id:responseData.name, ...ingridients}])
})}
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
