import { currencyFlagAssets } from "./uiAssets.metadata";

export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY";

export type CurrencyMeta = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  decimals: number;
  /** Mock rate: 1 unit of this currency in USD terms for display math */
  rateToUsd: number;
};

/**
 * Mock rates (frozen for reproducible UI).
 * Formula in UI: amountInUsd = inputAmount * (currency.rateToUsd / baseRate)
 */
export const mockCurrencies: CurrencyMeta[] = [
  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    decimals: 2,
    rateToUsd: 1,
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    decimals: 2,
    rateToUsd: 1.08,
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    decimals: 2,
    rateToUsd: 1.27,
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    decimals: 0,
    rateToUsd: 0.0067,
  },
];

export function getCurrencyMeta(code: CurrencyCode): CurrencyMeta {
  const c = mockCurrencies.find((x) => x.code === code);
  if (!c) throw new Error(`Unknown currency ${code}`);
  return c;
}

export function flagForCode(code: string): string {
  return currencyFlagAssets[code]?.emoji ?? "◯";
}
