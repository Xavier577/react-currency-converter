import {FC, Fragment} from "react";
import {Container} from "../containers/containers";
import {Bar} from "react-chartjs-2";
import {getTopTenCurrencies} from "../../utils";
import {CurrencyRates} from "../../types/types";

const BarChart: FC<{
    className?: string;
    rates?: CurrencyRates["rates"];
    base?: CurrencyRates["base"];
}> = ({className, rates, base}) => {
    let topTenCurrenciesData: { [currency: string]: number };
    let topTenCurrencies: string[] = [];
    let topTenRPB: number[] = [];
    if (rates && base) {
        topTenCurrenciesData = getTopTenCurrencies(rates, base);
        topTenCurrencies = [...Object.keys(topTenCurrenciesData)];
        topTenRPB = [...Object.values(topTenCurrenciesData)];
    }
    const state = {
        labels: [...topTenCurrencies],
        datasets: [
            {
                label: `Rate Per ${base ? base : "USD"}`,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: [...topTenRPB],
            },
        ],
    };
    return (
        <Fragment>
            <Container className={className}>
                <Bar
                    data={state}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: `Top Five Currencies according to Rate per  ${base ? base : "USD"}`,
                                font: {
                                    size: 20
                                }

                            },
                            legend: {
                                display: true,
                                position: "right"
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }

                        }
                    }}
                />
            </Container>
        </Fragment>
    );
};

export default BarChart;
