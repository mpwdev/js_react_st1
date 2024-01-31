import './UserInput.css';
// import { useState } from 'react';

export default function UserInput({ onChangeInput, userInput }) {
  

  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput('initialInvestment', event.target.value)
            }
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput('annualInvestment', event.target.value)
            }
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput('expectedReturn', event.target.value)
            }
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            onChange={(event) => onChangeInput('duration', event.target.value)}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
