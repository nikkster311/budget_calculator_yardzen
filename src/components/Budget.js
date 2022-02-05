import React from 'react';

function Budget() {
    return (
        <form>
            <div className="form-control">
                <label>What is your budget for this project?</label>
                <span className="currencyInput">$ <input type='text' placeholder="Enter your budget" /></span>
            </div>
        </form>
    )
}

export default Budget