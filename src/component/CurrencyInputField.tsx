import React, { FC, RefObject, ChangeEventHandler } from "react";

interface InputField {
  currencyOption: string[];
  id: string;
  className: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
  inputFieldRef: RefObject<HTMLInputElement>;
  selectorRef: RefObject<HTMLSelectElement>;
}
const CurrencyInputField: FC<InputField> = ({
  currencyOption,
  id,
  className,
  inputFieldRef,
  selectorRef,
  onChange,
}) => {
  return (
    <div>
      <input ref={inputFieldRef} type="number" id={id} />
      <select ref={selectorRef} className={className} onChange={onChange}>
        {currencyOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInputField;
