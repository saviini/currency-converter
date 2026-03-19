import { useCallback, useMemo, useState } from "react";

import {
  mockCurrencies,
  getCurrencyMeta,
  DEFAULT_CODES,
  type CurrencyCode,
  type CurrencyMeta,
} from "../../data/currencies.mock";
import { Text } from "../../design-system";
import {
  amountToUsd,
  formatCurrencyAmount,
  parseAmountInput,
  usdToAmount,
} from "../../lib/convert";
import { CurrencyRow } from "./CurrencyRow";
import { CurrencyPickerSheet } from "./CurrencyPickerSheet";
import { EmptyState } from "./EmptyState";

const INITIAL_USD = 100;

export function MultiCurrencyConverter() {
  const [selectedCodes, setSelectedCodes] = useState<CurrencyCode[]>(DEFAULT_CODES);
  const [baseUsd, setBaseUsd] = useState(INITIAL_USD);
  const [activeCode, setActiveCode] = useState<CurrencyCode>(DEFAULT_CODES[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const activeMeta = useMemo(
    () => getCurrencyMeta(activeCode),
    [activeCode]
  );

  const computedDraft = useMemo(() => {
    const v = usdToAmount(baseUsd, activeMeta);
    return formatCurrencyAmount(v, activeMeta);
  }, [baseUsd, activeMeta]);

  const [draft, setDraft] = useState(computedDraft);

  const handleActivate = useCallback(
    (code: CurrencyCode) => {
      if (code === activeCode) return;
      const meta = getCurrencyMeta(code);
      const v = usdToAmount(baseUsd, meta);
      setActiveCode(code);
      setDraft(formatCurrencyAmount(v, meta));
    },
    [activeCode, baseUsd]
  );

  const handleInputChange = useCallback(
    (raw: string) => {
      setDraft(raw);
      const n = parseAmountInput(raw);
      if (n === null) return;
      setBaseUsd(amountToUsd(n, activeMeta));
    },
    [activeMeta]
  );

  const handleBlur = useCallback(() => {
    const v = usdToAmount(baseUsd, activeMeta);
    setDraft(formatCurrencyAmount(v, activeMeta));
  }, [baseUsd, activeMeta]);

  const handleAdd = useCallback((code: CurrencyCode) => {
    setSelectedCodes((prev) => [...prev, code]);
    if (selectedCodes.length === 0) {
      setActiveCode(code);
      const meta = getCurrencyMeta(code);
      setDraft(formatCurrencyAmount(usdToAmount(INITIAL_USD, meta), meta));
    }
  }, [selectedCodes.length]);

  const handleRemove = useCallback(
    (code: CurrencyCode) => {
      setSelectedCodes((prev) => {
        const next = prev.filter((c) => c !== code);
        if (activeCode === code && next.length > 0) {
          const fallback = next[0];
          setActiveCode(fallback);
          const meta = getCurrencyMeta(fallback);
          setDraft(formatCurrencyAmount(usdToAmount(baseUsd, meta), meta));
        }
        return next;
      });
    },
    [activeCode, baseUsd]
  );

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", String(index));
    e.dataTransfer.effectAllowed = "move";

    const card = e.target as HTMLElement;
    const rect = card.getBoundingClientRect();
    const clone = card.cloneNode(true) as HTMLElement;
    clone.classList.add("currency-row--drag-ghost");
    clone.style.position = "fixed";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    clone.style.width = `${rect.width}px`;
    clone.style.pointerEvents = "none";
    document.body.appendChild(clone);
    e.dataTransfer.setDragImage(clone, rect.width / 2, rect.height / 2);
    setTimeout(() => clone.remove(), 0);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, toIndex: number) => {
      e.preventDefault();
      setDragOverIndex(null);
      const fromIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
      if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
      setSelectedCodes((prev) => {
        const next = [...prev];
        const [removed] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, removed);
        return next;
      });
    },
    []
  );

  const allAdded = selectedCodes.length >= mockCurrencies.length;
  const isEmpty = selectedCodes.length === 0;

  return (
    <>
      <section className="converter-stack" aria-label="Currency converter">
        <Text as="h1" variant="display">
          Net Worth Across Currencies
        </Text>

        {isEmpty ? (
          <EmptyState onAdd={() => setPickerOpen(true)} />
        ) : (
          <div className="converter-stack__list" onDragLeave={handleDragLeave}>
            {selectedCodes.map((code, index) => {
              const meta = getCurrencyMeta(code);
              const isActive = code === activeCode;
              const displayValue = formatCurrencyAmount(usdToAmount(baseUsd, meta), meta);
              return (
                <CurrencyRow
                  key={code}
                  meta={meta}
                  index={index}
                  isActive={isActive}
                  isDragOver={dragOverIndex === index}
                  inputValue={isActive ? draft : displayValue}
                  onInputChange={isActive ? handleInputChange : () => {}}
                  displayValue={displayValue}
                  onActivate={() => handleActivate(code)}
                  onAmountBlur={isActive ? handleBlur : undefined}
                  onRemove={() => handleRemove(code)}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                />
              );
            })}

            {!allAdded && (
              <button
                type="button"
                className="add-currency-btn"
                onClick={() => setPickerOpen(true)}
                aria-label="Add currency"
              >
                <span className="add-currency-btn__icon">+</span> Add currency
              </button>
            )}
          </div>
        )}
      </section>

      {pickerOpen && (
        <CurrencyPickerSheet
          selectedCodes={selectedCodes}
          onAdd={handleAdd}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </>
  );
}
