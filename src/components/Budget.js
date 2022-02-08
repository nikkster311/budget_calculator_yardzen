import React from 'react';

const Budget = ({ assignBudget }) => {

    // this component gets user input (user's budget for their Yardzen project) and sends it to the parent (App.js)
    return (
        <form>
            <div className="form-control">
                <label>What is your budget for this project?</label>
                <span className="currencyInput">$ <input type='text' onChange={e => assignBudget(e.target.value)} placeholder="Enter your budget" /></span>
            </div>
        </form>
    )
}

export default Budget