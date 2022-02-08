import React, { useState, useEffect } from 'react';

// Budget bar will show users how much of their budget they have left to "spend" on items
const BudgetBar = (props) => {

    // price = price of chosen items
    // total = budget they chose
    const { price, total, currencyFormat } = props;

    // we use this percent to set the bar
    const [percent, setPercent] = useState(price/total);

    useEffect(() => {
        setPercent(price/total)
    }) 
 
    const dynamicPercent = {
      width: `${percent}%`,
      }
   
    return (
      <div className="budget-bar__wrapper">
        <div className="budget-bar-total" style={dynamicPercent}>
          <span className='budget-bar-progress'>{`${currencyFormat(price)}`}</span>
        </div>
      </div>
    );
  };
  
  export default BudgetBar;