import React, { FC } from "react";
import { TableProp } from "../../types/types";
import "./rateTable.css";

const RateTables: FC<TableProp> = ({ base, rates }) => {
  let Currencies: string[];
  rates ? (Currencies = [...Object.keys(rates)].sort()) : (Currencies = [""]);
  return (
    <div>
      <table className="data-table">
        <caption>Base: {base ? base : null}</caption>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rates(per {base ? base : "usd"})</th>
          </tr>
        </thead>
        <tbody>
          {Currencies.map((currency: string) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rates?.[currency]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RateTables;
