import React, { FC, Fragment } from "react";
import { Container } from "../containers/containers";
import { Bar } from "react-chartjs-2";
import { getTopFiveCurrencies } from "../../utils";
import { CurrencyRates } from "../../types/types";

const BarChart: FC<{
  className?: string;
  rates?: CurrencyRates["rates"];
  base?: CurrencyRates["base"];
}> = ({ className, rates, base }) => {
  let topFiveCurrenciesData: {[currency: string]: number}
  let topFiveCurrencies: string[] = []
  let topFiveRPB: number[] = []
  if (rates && base) {
    topFiveCurrenciesData = getTopFiveCurrencies(rates, base);
    topFiveCurrencies = [...Object.keys(topFiveCurrenciesData)]
    topFiveRPB = [...Object.values(topFiveCurrenciesData)]
  }
  const state = {
    labels: [...topFiveCurrencies],
    datasets: [
      {
        label: `Rate Per ${base? base : "USD"}`,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [...topFiveRPB],
      },
    ],
  };
  return (
    <Fragment>
      <Container className={className}>
        <Bar
          type="bar"
          data={state}
          options={{
            title: {
              display: true,
              text: `Top Five Currencies according to Rate per  ${base? base : "USD"} `,
              fontSize: 20,
            
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Container>
    </Fragment>
  );
};

export default BarChart;
