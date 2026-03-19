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
  AED: { emoji: "🇦🇪", assetId: "flag-aed", notes: "UAE Dirham" },
  AFN: { emoji: "🇦🇫", assetId: "flag-afn", notes: "Afghan Afghani" },
  ALL: { emoji: "🇦🇱", assetId: "flag-all", notes: "Albanian Lek" },
  AMD: { emoji: "🇦🇲", assetId: "flag-amd", notes: "Armenian Dram" },
  ARS: { emoji: "🇦🇷", assetId: "flag-ars", notes: "Argentine Peso" },
  AUD: { emoji: "🇦🇺", assetId: "flag-aud", notes: "Australian Dollar" },
  AZN: { emoji: "🇦🇿", assetId: "flag-azn", notes: "Azerbaijani Manat" },
  BAM: { emoji: "🇧🇦", assetId: "flag-bam", notes: "Bosnian Mark" },
  BDT: { emoji: "🇧🇩", assetId: "flag-bdt", notes: "Bangladeshi Taka" },
  BGN: { emoji: "🇧🇬", assetId: "flag-bgn", notes: "Bulgarian Lev" },
  BHD: { emoji: "🇧🇭", assetId: "flag-bhd", notes: "Bahraini Dinar" },
  BND: { emoji: "🇧🇳", assetId: "flag-bnd", notes: "Brunei Dollar" },
  BOB: { emoji: "🇧🇴", assetId: "flag-bob", notes: "Bolivian Boliviano" },
  BRL: { emoji: "🇧🇷", assetId: "flag-brl", notes: "Brazilian Real" },
  BYN: { emoji: "🇧🇾", assetId: "flag-byn", notes: "Belarusian Ruble" },
  CAD: { emoji: "🇨🇦", assetId: "flag-cad", notes: "Canadian Dollar" },
  CHF: { emoji: "🇨🇭", assetId: "flag-chf", notes: "Swiss Franc" },
  CLP: { emoji: "🇨🇱", assetId: "flag-clp", notes: "Chilean Peso" },
  CNY: { emoji: "🇨🇳", assetId: "flag-cny", notes: "Chinese Yuan" },
  COP: { emoji: "🇨🇴", assetId: "flag-cop", notes: "Colombian Peso" },
  CRC: { emoji: "🇨🇷", assetId: "flag-crc", notes: "Costa Rican Colón" },
  CZK: { emoji: "🇨🇿", assetId: "flag-czk", notes: "Czech Koruna" },
  DKK: { emoji: "🇩🇰", assetId: "flag-dkk", notes: "Danish Krone" },
  DZD: { emoji: "🇩🇿", assetId: "flag-dzd", notes: "Algerian Dinar" },
  EGP: { emoji: "🇪🇬", assetId: "flag-egp", notes: "Egyptian Pound" },
  EUR: { emoji: "🇪🇺", assetId: "flag-eur", notes: "Euro" },
  GBP: { emoji: "🇬🇧", assetId: "flag-gbp", notes: "British Pound" },
  GEL: { emoji: "🇬🇪", assetId: "flag-gel", notes: "Georgian Lari" },
  GHS: { emoji: "🇬🇭", assetId: "flag-ghs", notes: "Ghanaian Cedi" },
  HKD: { emoji: "🇭🇰", assetId: "flag-hkd", notes: "Hong Kong Dollar" },
  HRK: { emoji: "🇭🇷", assetId: "flag-hrk", notes: "Croatian Kuna" },
  HUF: { emoji: "🇭🇺", assetId: "flag-huf", notes: "Hungarian Forint" },
  IDR: { emoji: "🇮🇩", assetId: "flag-idr", notes: "Indonesian Rupiah" },
  ILS: { emoji: "🇮🇱", assetId: "flag-ils", notes: "Israeli Shekel" },
  INR: { emoji: "🇮🇳", assetId: "flag-inr", notes: "Indian Rupee" },
  IQD: { emoji: "🇮🇶", assetId: "flag-iqd", notes: "Iraqi Dinar" },
  IRR: { emoji: "🇮🇷", assetId: "flag-irr", notes: "Iranian Rial" },
  ISK: { emoji: "🇮🇸", assetId: "flag-isk", notes: "Icelandic Króna" },
  JOD: { emoji: "🇯🇴", assetId: "flag-jod", notes: "Jordanian Dinar" },
  JPY: { emoji: "🇯🇵", assetId: "flag-jpy", notes: "Japanese Yen" },
  KES: { emoji: "🇰🇪", assetId: "flag-kes", notes: "Kenyan Shilling" },
  KGS: { emoji: "🇰🇬", assetId: "flag-kgs", notes: "Kyrgyzstani Som" },
  KRW: { emoji: "🇰🇷", assetId: "flag-krw", notes: "South Korean Won" },
  KWD: { emoji: "🇰🇼", assetId: "flag-kwd", notes: "Kuwaiti Dinar" },
  KZT: { emoji: "🇰🇿", assetId: "flag-kzt", notes: "Kazakhstani Tenge" },
  LBP: { emoji: "🇱🇧", assetId: "flag-lbp", notes: "Lebanese Pound" },
  LKR: { emoji: "🇱🇰", assetId: "flag-lkr", notes: "Sri Lankan Rupee" },
  LYD: { emoji: "🇱🇾", assetId: "flag-lyd", notes: "Libyan Dinar" },
  MAD: { emoji: "🇲🇦", assetId: "flag-mad", notes: "Moroccan Dirham" },
  MDL: { emoji: "🇲🇩", assetId: "flag-mdl", notes: "Moldovan Leu" },
  MKD: { emoji: "🇲🇰", assetId: "flag-mkd", notes: "Macedonian Denar" },
  MXN: { emoji: "🇲🇽", assetId: "flag-mxn", notes: "Mexican Peso" },
  MYR: { emoji: "🇲🇾", assetId: "flag-myr", notes: "Malaysian Ringgit" },
  NGN: { emoji: "🇳🇬", assetId: "flag-ngn", notes: "Nigerian Naira" },
  NOK: { emoji: "🇳🇴", assetId: "flag-nok", notes: "Norwegian Krone" },
  NPR: { emoji: "🇳🇵", assetId: "flag-npr", notes: "Nepali Rupee" },
  NZD: { emoji: "🇳🇿", assetId: "flag-nzd", notes: "New Zealand Dollar" },
  OMR: { emoji: "🇴🇲", assetId: "flag-omr", notes: "Omani Rial" },
  PEN: { emoji: "🇵🇪", assetId: "flag-pen", notes: "Peruvian Sol" },
  PHP: { emoji: "🇵🇭", assetId: "flag-php", notes: "Philippine Peso" },
  PKR: { emoji: "🇵🇰", assetId: "flag-pkr", notes: "Pakistani Rupee" },
  PLN: { emoji: "🇵🇱", assetId: "flag-pln", notes: "Polish Złoty" },
  QAR: { emoji: "🇶🇦", assetId: "flag-qar", notes: "Qatari Riyal" },
  RON: { emoji: "🇷🇴", assetId: "flag-ron", notes: "Romanian Leu" },
  RSD: { emoji: "🇷🇸", assetId: "flag-rsd", notes: "Serbian Dinar" },
  RUB: { emoji: "🇷🇺", assetId: "flag-rub", notes: "Russian Ruble" },
  SAR: { emoji: "🇸🇦", assetId: "flag-sar", notes: "Saudi Riyal" },
  SEK: { emoji: "🇸🇪", assetId: "flag-sek", notes: "Swedish Krona" },
  SGD: { emoji: "🇸🇬", assetId: "flag-sgd", notes: "Singapore Dollar" },
  SYP: { emoji: "🇸🇾", assetId: "flag-syp", notes: "Syrian Pound" },
  THB: { emoji: "🇹🇭", assetId: "flag-thb", notes: "Thai Baht" },
  TND: { emoji: "🇹🇳", assetId: "flag-tnd", notes: "Tunisian Dinar" },
  TRY: { emoji: "🇹🇷", assetId: "flag-try", notes: "Turkish Lira" },
  TWD: { emoji: "🇹🇼", assetId: "flag-twd", notes: "Taiwan Dollar" },
  UAH: { emoji: "🇺🇦", assetId: "flag-uah", notes: "Ukrainian Hryvnia" },
  USD: { emoji: "🇺🇸", assetId: "flag-usd", notes: "US Dollar" },
  UZS: { emoji: "🇺🇿", assetId: "flag-uzs", notes: "Uzbekistani Som" },
  VND: { emoji: "🇻🇳", assetId: "flag-vnd", notes: "Vietnamese Dong" },
  XOF: { emoji: "🌍", assetId: "flag-xof", notes: "West African CFA Franc" },
  YER: { emoji: "🇾🇪", assetId: "flag-yer", notes: "Yemeni Rial" },
  ZAR: { emoji: "🇿🇦", assetId: "flag-zar", notes: "South African Rand" },
};
