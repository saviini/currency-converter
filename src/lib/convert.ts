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
  const formatted = abs.toLocaleString("en-US", opts).replace(/,/g, " ");
  if (rounded < 0) return `-${formatted}`;
  return formatted;
}

/** Group digits with narrow no-break space as thousands separator (typing + display) */
export function formatAmountInputLive(raw: string, maxDecimals: number): string {
  const normalized = raw.replace(/[\s,\u00a0]/g, "");
  if (normalized === "") return "";
  if (normalized === "-") return "-";

  const neg = normalized.startsWith("-");
  let rest = neg ? normalized.slice(1) : normalized;

  const hasTrailingDot = /\.$/.test(rest);
  const dotIdx = rest.indexOf(".");
  const intRaw = dotIdx === -1 ? rest : rest.slice(0, dotIdx);
  const afterDot = dotIdx === -1 ? "" : rest.slice(dotIdx + 1);
  let decDigits = afterDot.replace(/\D/g, "");
  if (maxDecimals === 0) decDigits = "";
  else decDigits = decDigits.slice(0, maxDecimals);

  let intDigits = intRaw.replace(/\D/g, "");
  if (intDigits === "" && dotIdx !== -1) {
    const intFmt = "0";
    if (maxDecimals === 0) return (neg ? "-" : "") + intFmt;
    if (hasTrailingDot && decDigits === "") return (neg ? "-" : "") + intFmt + ".";
    return (neg ? "-" : "") + intFmt + (decDigits.length > 0 ? `.${decDigits}` : "");
  }
  if (intDigits === "" && dotIdx === -1) return neg ? "-" : "";

  if (intDigits === "") intDigits = "0";

  const intFmt = intDigits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  if (maxDecimals === 0) return (neg ? "-" : "") + intFmt;

  if (dotIdx !== -1) {
    if (hasTrailingDot && decDigits === "") return (neg ? "-" : "") + intFmt + ".";
    return (neg ? "-" : "") + intFmt + "." + decDigits;
  }
  return (neg ? "-" : "") + intFmt;
}

/** Parse user input (digits + one dot); accepts space / thin space thousands */
export function parseAmountInput(raw: string): number | null {
  const t = raw.replace(/[\s,\u00a0]/g, "").trim();
  if (t === "" || t === ".") return null;
  const n = Number(t);
  if (Number.isFinite(n)) return n;
  return null;
}
