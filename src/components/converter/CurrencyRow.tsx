import type { CurrencyMeta } from "../../data/currencies.mock";
import { flagForCode } from "../../data/currencies.mock";
import { uiAssetsMetadata } from "../../data/uiAssets.metadata";
import { Card, Text, AmountField } from "../../design-system";

type CurrencyRowProps = {
  meta: CurrencyMeta;
  isActive: boolean;
  /** Editable when active */
  inputValue: string;
  onInputChange: (v: string) => void;
  /** Read-only line when not active */
  displayValue: string;
  onActivate: () => void;
  onAmountBlur?: () => void;
  rateLabel: string;
};

export function CurrencyRow({
  meta,
  isActive,
  inputValue,
  onInputChange,
  displayValue,
  onActivate,
  onAmountBlur,
  rateLabel,
}: CurrencyRowProps) {
  const flagNotes = uiAssetsMetadata[`flag-${meta.code.toLowerCase()}`];
  const flagAlt = flagNotes?.label ?? meta.name;

  return (
    <Card
      interactive
      className={`currency-row ${isActive ? "currency-row__active" : ""}`}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      aria-current={isActive ? "true" : undefined}
      aria-label={`${meta.name}, ${isActive ? "editing" : "tap to edit"}`}
    >
      <div className="currency-row__top">
        <span className="ds-flag" title={flagAlt} aria-hidden>
          {flagForCode(meta.code)}
        </span>
        <div className="currency-row__meta">
          <div className="currency-row__code-line">
            <Text as="span" variant="title">
              {meta.code}
            </Text>
            <Text as="span" variant="caption">
              {meta.symbol}
            </Text>
          </div>
          <Text variant="caption">{meta.name}</Text>
        </div>
      </div>
      {isActive ? (
        <AmountField
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onBlur={onAmountBlur}
          onClick={(e) => e.stopPropagation()}
          suffix={meta.code}
          aria-label={`Amount in ${meta.code}`}
        />
      ) : (
        <div className="ds-input-wrap" aria-readonly>
          <span className="ds-input" style={{ pointerEvents: "none" }}>
            {displayValue}
          </span>
          <span className="ds-pill">{meta.code}</span>
        </div>
      )}
      <div className="currency-row__rate-hint">
        <Text variant="micro">{rateLabel}</Text>
      </div>
    </Card>
  );
}
