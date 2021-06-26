import React, { FC } from "react";
import { CurrencyInputFieldProp } from "../../types/types";

const CurrencyInputField: FC<CurrencyInputFieldProp> = ({
  inputRef,
  theme,
}) => {
  return (
    <div
      className={`currency-input-field ${
        theme === "light" ? "input-field-light" : "input-field-dark"
      }`}
    >
      <input ref={inputRef} type="number" />
    </div>
  );
};

export default CurrencyInputField;
