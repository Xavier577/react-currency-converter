import React from "react";

function InitialCurrency({ currencyOption }) {
  return (
    <div>
      <input type="number" name="number" id="input" />
      <select className="currency-from">
        {currencyOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InitialCurrency;
