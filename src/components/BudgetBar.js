import React, { useState, useEffect } from 'react';

// Budget bar will show users how much of their budget they have left to "spend" on items
const BudgetBar = (props) => {

    // price = price of chosen items
    // total = budget they chose
    const { price, total, currencyFormat, budgetBool } = props;

    // remove extra zeros (added zeros to match int formatting in database)
    const formattedTotal = total/100

    // we use this percent to set the bar
    const [percent, setPercent] = useState(price/formattedTotal);

    useEffect(() => {
        setPercent(price/formattedTotal)
    }) 
 
    const dynamicPercent = {
      width: `${percent}%`,
    }
   
    return (
    <div>
        <div className={`budget-cost-display__wrapper ` + (budgetBool ? 'show' : 'hide')}>
            {/* display total cost of selected items, custom css if over-budget */}
            <h3>The cost of your items is <span className={(percent > 100 ?  `over-budget` : ``)}>{`${currencyFormat(price)}`}</span></h3>
            {/* dynamically display amount left to spent/over budget */}
            {price - total <= 0 ? 
              <h3>You have <span>{currencyFormat(total - price)}</span> left to spend</h3>
            :
              <div>
                <h3>You are overbudget by <span className='over-budget'> {`${currencyFormat(price - total)}`}</span></h3>
                <p>Please remove a few items or choose the lower-cost option.</p>
              </div>
            } 
        </div>
      <div className="budget-bar__wrapper">
        <div className={`budget-bar-total ` + (percent > 100 ?  `over-budget` : ``)} style={dynamicPercent}>
        <span className='budget-bar-progress'>{`${currencyFormat(price)}`}</span>
        </div>
      </div>
    </div>
    );
  };
  
  export default BudgetBar;