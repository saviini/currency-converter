import type { InputHTMLAttributes, ReactNode } from "react";

import "./components.css";

type AmountFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  suffix?: ReactNode;
};

export function AmountField({ className = "", suffix, ...inputProps }: AmountFieldProps) {
  return (
    <div className={`ds-input-wrap ${className}`.trim()}>
      <input
        className="ds-input"
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        {...inputProps}
      />
      {suffix != null ? <span className="ds-pill">{suffix}</span> : null}
    </div>
  );
}
