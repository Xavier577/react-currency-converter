import React, { FC, Fragment } from "react";
import { Container } from "../containers/containers";
import { TableProp } from "../../types/types";
import "./rateTable.css";

const RateTables: FC<TableProp> = ({ base, rates }) => {
  let Currencies: string[];
  rates ? (Currencies = [...Object.keys(rates)].sort()) : (Currencies = [""]);
  return (
    <Fragment>
      <Container className="table-container">
        <div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Rates(per {base ? base : "USD"})</th>
              </tr>
            </thead>
            <tbody>
              {Currencies.map((currency: string) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>
                    {rates ? parseFloat(rates[currency]).toPrecision(4) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Fragment>
  );
};

export default RateTables;
