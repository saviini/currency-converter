import type { CurrencyMeta } from "../data/currencies.mock";

/** 1 unit of currency = rateToUsd US dollars */
export function amountToUsd(amount: number, meta: CurrencyMeta): number {
  return amount * meta.rateToUsd;
}

export function usdToAmount(usd: number, meta: CurrencyMeta): number {
  if (meta.rateToUsd === 0) return 0;
  return usd / meta.rateToUsd;
}

export function formatCurrencyAmount(value: number, meta: CurrencyMeta): string {
  const d = meta.decimals;
  const rounded = d === 0 ? Math.round(value) : Math.round(value * 10 ** d) / 10 ** d;
  const abs = Math.abs(rounded);
  const opts: Intl.NumberFormatOptions =
    d === 0
      ? { maximumFractionDigits: 0, minimumFractionDigits: 0 }
      : { maximumFractionDigits: d, minimumFractionDigits: d };
  const formatted = abs.toLocaleString("en-US", opts);
  if (rounded < 0) return `-${formatted}`;
  return formatted;
}

/** Parse user input (digits + one dot) */
export function parseAmountInput(raw: string): number | null {
  const t = raw.replace(/,/g, "").trim();
  if (t === "" || t === ".") return null;
  const n = Number(t);
  if (Number.isFinite(n)) return n;
  return null;
}
