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
        <tr>
          <th>Currency</th>
          <th>Rates</th>
        </tr>
        {Currencies.map((currency: string) => (
          <tr>
            <td>{currency}</td>
            <td>{rates?.[currency]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RateTables;
