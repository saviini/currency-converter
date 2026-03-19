import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  mockCurrencies,
  flagForCode,
  type CurrencyCode,
} from "../../data/currencies.mock";
import { matchesSearch } from "../../lib/transliterate";

type CurrencyPickerSheetProps = {
  selectedCodes: CurrencyCode[];
  onAdd: (code: CurrencyCode) => void;
  onClose: () => void;
};

export function CurrencyPickerSheet({
  selectedCodes,
  onAdd,
  onClose,
}: CurrencyPickerSheetProps) {
  const [query, setQuery] = useState("");

  const q = query.trim();
  const available = mockCurrencies
    .filter(
      (c) =>
        !selectedCodes.includes(c.code) &&
        (q === "" ||
          matchesSearch(c.code, q) ||
          matchesSearch(c.name, q))
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const sheet = (
    <div
      className="currency-picker-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Add currency"
    >
      <div
        className="currency-picker-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="currency-picker-sheet__handle" />
        <div className="currency-picker-sheet__title">Add currency</div>

        {/* Search input */}
        <div className="currency-picker-search ds-input-wrap">
          <span className="currency-picker-search__icon" aria-hidden>⌕</span>
          <input
            className="currency-picker-search__input"
            type="text"
            placeholder="Search by name or code…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Search currencies"
          />
          {query && (
            <button
              className="currency-picker-search__clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="currency-picker-list">
          {available.length === 0 ? (
            <div className="currency-picker-empty">
              {q ? `No results for "${query}"` : "All currencies added"}
            </div>
          ) : (
            available.map((meta) => (
              <button
                key={meta.code}
                className="currency-picker-item"
                onClick={() => {
                  onAdd(meta.code);
                  onClose();
                }}
                aria-label={`Add ${meta.name}`}
              >
                <span className="currency-picker-item__flag" aria-hidden>
                  {flagForCode(meta.code)}
                </span>
                <div className="currency-picker-item__meta">
                  <div className="currency-picker-item__code">{meta.code}</div>
                  <div className="currency-picker-item__name ds-text-caption">
                    {meta.symbol}&nbsp;{meta.name}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(sheet, document.body);
}
