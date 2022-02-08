import './App.css';
import React, { useState } from 'react';
import ItemsList from './components/ItemsList';
import Budget from './components/Budget';
import Header from './components/Header';


function App() {

  // this is the budget we grabbed from the budget component
  // we need it in the parent because we are sending it to the ItemsList component
  const [budget, setBudget] = useState(0)

  function assignBudget(budget) {
    setBudget(budget)
  }

  return (
    <div className='container'>
      <Header />
      <Budget assignBudget={assignBudget}/>
      <ItemsList budget={budget}/>

    </div>
  );
}

export default App;
