import './App.css';
import React, { useState, useEffect } from 'react';
import ItemsList from './components/ItemsList';
import Budget from './components/Budget';
import Header from './components/Header';
import BudgetBar from './components/BudgetBar';


function App() {

  // this is the budget we grabbed from the budget component
  // we need it in the parent because we are sending it to the ItemsList component
  const [budget, setBudget] = useState(0)

  // disable everything until user has set a budget
  const [budgetBool, setBudgetBool] = useState(false)

  // set the price of all items user has selected
  const [price, setPrice] = useState(0)


  // update the budget - passed to Budget and BudgetBar components
  function assignBudget(budget, key, e) {
    // here I was trying to prevent the app from reloading if the user presses enter
    // while in the input field in the budget component
    if (key === 13) {
      e.preventDefault();
    }
    // add extra zeros (added zeros to match int formatting in database)
    var intBudget = parseInt(budget) * 100
    setBudget(intBudget)
  }

  // returns true if user has entered a number into the budget input field, false if entered anything else or less than 0
  function checkBudgetBool(budget) {
    if (budget > 0) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    setBudgetBool(checkBudgetBool(budget))
  }) 

  // formatting our price - numbers to currency in USD - passed to ItemsList and BudgetBar components
  function currencyFormat(num) {
    return '$' + (num/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  // update user cost - passed to ItemsList and BudgetBar components
  // when user selects an item, add cost to their total cost
  // we will use this to compare it to the budget they set for themselves
  function updateCost(value, checked) {
    if (checked) {
        setPrice(prevPrice => prevPrice + parseFloat(value))
    } else {
        setPrice(prevPrice => prevPrice - parseFloat(value))
    }
  };
  
  return (
    <div className='container'>
      <Header />
      <Budget assignBudget={assignBudget}/>
      <ItemsList
        handleCheckboxChange={updateCost}
        budgetBool={budgetBool}
        currencyFormat={currencyFormat}
        price={price}/>
      <BudgetBar
        price={price}
        total={budget}
        budgetBool={budgetBool}
        currencyFormat={currencyFormat}/>

    </div>
  );
}

export default App;
