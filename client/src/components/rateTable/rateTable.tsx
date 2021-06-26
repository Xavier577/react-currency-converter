import React, { FC, Fragment } from "react";
import { Container } from "../containers/containers";
import { TableProp } from "../../types/types";
import { getRatePerBaseCurrency } from "../../utils";
import "./rateTable.css";

const RateTables: FC<TableProp> = ({ base, rates, tableTheme }) => {
  let Currencies: string[] | undefined;
  rates
    ? (Currencies = [...Object.keys(rates)].sort())
    : (Currencies = undefined);
  return (
    <Fragment>
      <Container
        className={`table-container ${
          tableTheme === "light"
            ? "table-container-light"
            : "table-container-dark"
        }`}
      >
        <div>
          <table
            className={tableTheme === "light" ? "light-table" : "dark-table"}
          >
            <thead className="table-head">
              <tr>
                <th>Currency</th>
                <th>Rates(per {base ? base : "USD"})</th>
              </tr>
            </thead>
            <tbody>
              {Currencies !== undefined ? (
                Currencies.map((currency: string) => (
                  <tr key={currency}>
                    <td>{currency}</td>
                    <td>
                      {rates && base
                        ? getRatePerBaseCurrency(currency, rates, base).toFixed(
                            4
                          )
                        : null}
                    </td>
                  </tr>
                ))
              ) : (
                <Fragment>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </Fragment>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </Fragment>
  );
};

export default RateTables;
