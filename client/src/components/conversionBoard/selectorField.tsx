import React, { FC } from "react";
import { SelectorFieldProp } from "../../types/types";

const SelectorField: FC<SelectorFieldProp> = ({
  selectRef,
  currencyOptions,
}) => {
  return (
    <div>
      <select ref={selectRef} name="country-currencies">
        {currencyOptions.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorField;
