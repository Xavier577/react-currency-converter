import React from "react";

function FinalCurrency({ currencyOption }) {
  return (
    <div className="output">
      <input type="number" name="output" id="output" />
      <select className="currency-to">
        {currencyOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FinalCurrency;
