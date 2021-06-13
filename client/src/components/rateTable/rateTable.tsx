import React, { FC } from "react";
import { TableProp } from "../../types/types";
import "./rateTable.css";

const RateTables: FC<TableProp> = ({ base, rates }) => {
  const Currencies = [...Object.keys(rates)].sort();
  return (
    <div>
      <table className="data-table">
        <caption>Base: {base}</caption>
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
