import React, { FC } from "react";
import { CurrencyRates } from "../../types/types";
import "./rateTable.css";

const RateTables: FC<CurrencyRates> = ({ rates }) => {
  const Currencies = [...Object.keys(rates)];
  return (
    <div>
      <table className="data-table">
        <caption>Base = USD</caption>
        <tr>
          <th>Currency</th>
          <th>Rates</th>
        </tr>
        {Currencies.map((currency) => (
          <tr>
            <td>{currency}</td>
            <td>{rates[currency]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RateTables;
