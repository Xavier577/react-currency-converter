import React, { FC } from "react";
import { SelectorFieldProp } from "../../types/types";

const SelectorField: FC<SelectorFieldProp> = ({
  selectRef,
  currencyOptions,
  onChange,
}) => {
  return (
    <div>
      <select ref={selectRef} name="select-currency" onChange={onChange}>
        {currencyOptions.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorField;
