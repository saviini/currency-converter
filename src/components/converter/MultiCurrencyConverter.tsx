import { useCallback, useMemo, useState } from "react";

import {
  mockCurrencies,
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

const INITIAL_USD = 100;
const INITIAL_CODE: CurrencyCode = "USD";

function formatUsdPerUnit(meta: CurrencyMeta): string {
  if (meta.rateToUsd >= 0.01) return meta.rateToUsd.toFixed(meta.decimals);
  return meta.rateToUsd.toPrecision(4);
}

function buildRateLabel(meta: CurrencyMeta): string {
  return `Mock rate · 1 ${meta.code} = ${formatUsdPerUnit(meta)} USD`;
}

export function MultiCurrencyConverter() {
  const list = mockCurrencies;
  const [baseUsd, setBaseUsd] = useState(INITIAL_USD);
  const [activeCode, setActiveCode] = useState<CurrencyCode>(INITIAL_CODE);

  const activeMeta = useMemo(
    () => list.find((c) => c.code === activeCode)!,
    [list, activeCode]
  );

  const inputValue = useMemo(() => {
    const v = usdToAmount(baseUsd, activeMeta);
    return formatCurrencyAmount(v, activeMeta);
  }, [baseUsd, activeMeta]);

  const [draft, setDraft] = useState(inputValue);

  const syncDraftFromBase = useCallback(() => {
    const v = usdToAmount(baseUsd, activeMeta);
    setDraft(formatCurrencyAmount(v, activeMeta));
  }, [baseUsd, activeMeta]);

  const handleActivate = useCallback(
    (code: CurrencyCode) => {
      if (code === activeCode) return;
      const meta = list.find((c) => c.code === code)!;
      const v = usdToAmount(baseUsd, meta);
      setActiveCode(code);
      setDraft(formatCurrencyAmount(v, meta));
    },
    [activeCode, baseUsd, list]
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
    syncDraftFromBase();
  }, [syncDraftFromBase]);

  return (
    <section className="converter-stack" aria-labelledby="converter-heading">
      <Text as="h2" variant="bodySm" id="converter-heading">
        Live preview (mock rates)
      </Text>
      {list.map((meta) => {
        const isActive = meta.code === activeCode;
        const displayValue = formatCurrencyAmount(usdToAmount(baseUsd, meta), meta);
        const rateLabel = buildRateLabel(meta);
        return (
          <CurrencyRow
            key={meta.code}
            meta={meta}
            isActive={isActive}
            inputValue={isActive ? draft : displayValue}
            onInputChange={isActive ? handleInputChange : () => {}}
            displayValue={displayValue}
            onActivate={() => handleActivate(meta.code)}
            onAmountBlur={isActive ? handleBlur : undefined}
            rateLabel={rateLabel}
          />
        );
      })}
    </section>
  );
}
