import type { CurrencyMeta } from "../../data/currencies.mock";
import { flagForCode } from "../../data/currencies.mock";
import { Card, Text, AmountField } from "../../design-system";

type CurrencyRowProps = {
  meta: CurrencyMeta;
  index: number;
  isActive: boolean;
  isDragOver?: boolean;
  inputValue: string;
  onInputChange: (v: string) => void;
  displayValue: string;
  onActivate: () => void;
  onAmountBlur?: () => void;
  onRemove: () => void;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDragLeave?: () => void;
  onDrop: (e: React.DragEvent, index: number) => void;
};

export function CurrencyRow({
  meta,
  index,
  isActive,
  isDragOver,
  inputValue,
  onInputChange,
  displayValue,
  onActivate,
  onAmountBlur,
  onRemove,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
}: CurrencyRowProps) {
  return (
    <Card
      interactive
      draggable={!isActive}
      className={`currency-row${isDragOver ? " currency-row--drag-over" : ""}`}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      aria-label={`${meta.name}, ${isActive ? "editing" : "tap to edit"}`}
    >
      <div className="currency-row__top">
        <span className="ds-flag" aria-hidden>
          {flagForCode(meta.code)}
        </span>

        {/* Meta: code on line 1, symbol + name on line 2 */}
        <div className="currency-row__meta">
          <Text as="span" variant="title">
            {meta.code}
          </Text>
          <Text variant="caption">
            {meta.symbol}&nbsp;{meta.name}
          </Text>
        </div>

        <button
          className="currency-row__remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label={`Remove ${meta.code}`}
        >
          ×
        </button>
      </div>

      {isActive ? (
        <AmountField
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onBlur={onAmountBlur}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Amount in ${meta.code}`}
        />
      ) : (
        <div className="ds-input-wrap" aria-readonly>
          <span className="ds-input" style={{ pointerEvents: "none" }}>
            {displayValue}
          </span>
        </div>
      )}
    </Card>
  );
}
