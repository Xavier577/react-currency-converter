import React, { FC, Fragment } from "react";
import { ConverterBoardChildrenProp } from "../../types/types";
import { Card } from "../containers/containers";
import CurrencyInputField from "./currencyInputField";
import SelectorField from "./selectorField";
import ConvertIcon from "../../assets/icons/convertIcon";
import "./inputField.css";

const ConverterBoard: FC<ConverterBoardChildrenProp> = ({
  base,
  FieldRefs,
  SelectorCurrencyOptions,
  buttonClickEvent,
  selectChangeEvent,
  theme,
}) => {
  const { InputField, OutputField, CurrencyFrom, CurrencyTo } = FieldRefs;
  return (
    <Fragment>
      <Card variant="medium" className="converter-board">
        <form className="form-layout">
          <span id="base">
            Base: <span id="base-currency">{base ? base : "USD"}</span>
          </span>
          <div className="row">
            <CurrencyInputField theme={theme} inputRef={InputField} />
            <SelectorField
              theme={theme}
              selectRef={CurrencyFrom}
              currencyOptions={SelectorCurrencyOptions}
              onChange={selectChangeEvent}
            />
          </div>
          <div className="middle-space">
            <button onClick={buttonClickEvent} className="convert-button">
              <ConvertIcon className="convert-icon" />
            </button>
          </div>
          <div className="row">
            <CurrencyInputField theme={theme} inputRef={OutputField} />
            <SelectorField
              theme={theme}
              onChange={selectChangeEvent}
              selectRef={CurrencyTo}
              currencyOptions={SelectorCurrencyOptions}
            />
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default ConverterBoard;
