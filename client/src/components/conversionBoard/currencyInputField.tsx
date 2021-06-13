import React, { FC } from "react";
import { CurrencyInputFieldProp } from "../../types/types";

const CurrencyInputField: FC<CurrencyInputFieldProp> = ({ inputRef }) => {
  return (
    <div className="currency-input-field">
      <input ref={inputRef} type="number" />
    </div>
  );
};

export default CurrencyInputField;
