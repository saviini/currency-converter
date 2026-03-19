/**
 * Central store for image / icon / illustration metadata.
 * Prototype: no binary assets; flags use emoji. Replace `src` with CDN paths later.
 */
export type ImageAssetMeta = {
  id: string;
  kind: "flag-emoji" | "icon" | "illustration";
  /** Display label for design handoff */
  label: string;
  /** Optional URL when wired to real assets */
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const uiAssetsMetadata: Record<string, ImageAssetMeta> = {
  "brand-mark": {
    id: "brand-mark",
    kind: "icon",
    label: "App mark — circle with currency symbol",
    src: null,
    alt: "Currency",
    width: 40,
    height: 40,
  },
  "illus-empty-state": {
    id: "illus-empty-state",
    kind: "illustration",
    label: "Empty rates placeholder",
    src: null,
    alt: "",
    width: 120,
    height: 80,
  },
};

/** Flag presentation per ISO currency (emoji + fallback char) */
export const currencyFlagAssets: Record<
  string,
  { emoji: string; assetId: string; notes: string }
> = {
  USD: { emoji: "🇺🇸", assetId: "flag-usd", notes: "US Dollar" },
  EUR: { emoji: "🇪🇺", assetId: "flag-eur", notes: "Euro" },
  GBP: { emoji: "🇬🇧", assetId: "flag-gbp", notes: "British Pound" },
  JPY: { emoji: "🇯🇵", assetId: "flag-jpy", notes: "Japanese Yen" },
  CHF: { emoji: "🇨🇭", assetId: "flag-chf", notes: "Swiss Franc (optional 4th)" },
};
