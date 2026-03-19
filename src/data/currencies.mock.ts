import { currencyFlagAssets } from "./uiAssets.metadata";

export type CurrencyCode =
  | "AED" | "AFN" | "ALL" | "AMD" | "ARS" | "AUD" | "AZN"
  | "BAM" | "BDT" | "BGN" | "BHD" | "BND" | "BOB" | "BRL" | "BYN"
  | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK"
  | "DKK" | "DZD" | "EGP" | "EUR"
  | "GBP" | "GEL" | "GHS"
  | "HKD" | "HRK" | "HUF"
  | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK"
  | "JOD" | "JPY"
  | "KES" | "KGS" | "KRW" | "KWD" | "KZT"
  | "LBP" | "LKR" | "LYD"
  | "MAD" | "MDL" | "MKD" | "MXN" | "MYR"
  | "NGN" | "NOK" | "NPR" | "NZD"
  | "OMR"
  | "PEN" | "PHP" | "PKR" | "PLN"
  | "QAR"
  | "RON" | "RSD" | "RUB"
  | "SAR" | "SEK" | "SGD" | "SYP"
  | "THB" | "TND" | "TRY" | "TWD"
  | "UAH" | "USD" | "UZS"
  | "VND"
  | "XOF"
  | "YER"
  | "ZAR";

export type CurrencyMeta = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  decimals: number;
  /** Mock rate: 1 unit = this many USD */
  rateToUsd: number;
};

export const mockCurrencies: CurrencyMeta[] = [
  // Major world
  { code: "USD", name: "US Dollar",              symbol: "$",    decimals: 2, rateToUsd: 1        },
  { code: "EUR", name: "Euro",                   symbol: "€",    decimals: 2, rateToUsd: 1.08     },
  { code: "GBP", name: "British Pound",          symbol: "£",    decimals: 2, rateToUsd: 1.27     },
  { code: "JPY", name: "Japanese Yen",           symbol: "¥",    decimals: 0, rateToUsd: 0.0067   },
  { code: "CHF", name: "Swiss Franc",            symbol: "Fr",   decimals: 2, rateToUsd: 1.13     },
  { code: "CNY", name: "Chinese Yuan",           symbol: "¥",    decimals: 2, rateToUsd: 0.138    },
  { code: "CAD", name: "Canadian Dollar",        symbol: "C$",   decimals: 2, rateToUsd: 0.73     },
  { code: "AUD", name: "Australian Dollar",      symbol: "A$",   decimals: 2, rateToUsd: 0.65     },
  { code: "HKD", name: "Hong Kong Dollar",       symbol: "HK$",  decimals: 2, rateToUsd: 0.128    },
  { code: "SGD", name: "Singapore Dollar",       symbol: "S$",   decimals: 2, rateToUsd: 0.745    },
  { code: "NZD", name: "New Zealand Dollar",     symbol: "NZ$",  decimals: 2, rateToUsd: 0.595    },
  // Europe
  { code: "SEK", name: "Swedish Krona",          symbol: "kr",   decimals: 2, rateToUsd: 0.092    },
  { code: "NOK", name: "Norwegian Krone",        symbol: "kr",   decimals: 2, rateToUsd: 0.091    },
  { code: "DKK", name: "Danish Krone",           symbol: "kr",   decimals: 2, rateToUsd: 0.144    },
  { code: "ISK", name: "Icelandic Króna",        symbol: "kr",   decimals: 0, rateToUsd: 0.0072   },
  { code: "PLN", name: "Polish Złoty",           symbol: "zł",   decimals: 2, rateToUsd: 0.246    },
  { code: "CZK", name: "Czech Koruna",           symbol: "Kč",   decimals: 2, rateToUsd: 0.044    },
  { code: "HUF", name: "Hungarian Forint",       symbol: "Ft",   decimals: 0, rateToUsd: 0.0028   },
  { code: "RON", name: "Romanian Leu",           symbol: "lei",  decimals: 2, rateToUsd: 0.221    },
  { code: "BGN", name: "Bulgarian Lev",          symbol: "лв",   decimals: 2, rateToUsd: 0.552    },
  { code: "RSD", name: "Serbian Dinar",          symbol: "дин",  decimals: 0, rateToUsd: 0.0093   },
  { code: "HRK", name: "Croatian Kuna",          symbol: "kn",   decimals: 2, rateToUsd: 0.143    },
  { code: "MKD", name: "Macedonian Denar",       symbol: "ден",  decimals: 2, rateToUsd: 0.0175   },
  { code: "BAM", name: "Bosnian Mark",           symbol: "KM",   decimals: 2, rateToUsd: 0.552    },
  { code: "ALL", name: "Albanian Lek",           symbol: "L",    decimals: 2, rateToUsd: 0.011    },
  { code: "MDL", name: "Moldovan Leu",           symbol: "L",    decimals: 2, rateToUsd: 0.056    },
  // Post-Soviet
  { code: "RUB", name: "Russian Ruble",          symbol: "₽",    decimals: 2, rateToUsd: 0.011    },
  { code: "BYN", name: "Belarusian Ruble",       symbol: "Br",   decimals: 2, rateToUsd: 0.309    },
  { code: "UAH", name: "Ukrainian Hryvnia",      symbol: "₴",    decimals: 2, rateToUsd: 0.024    },
  { code: "KZT", name: "Kazakhstani Tenge",      symbol: "₸",    decimals: 2, rateToUsd: 0.00215  },
  { code: "GEL", name: "Georgian Lari",          symbol: "₾",    decimals: 2, rateToUsd: 0.369    },
  { code: "AMD", name: "Armenian Dram",          symbol: "֏",    decimals: 0, rateToUsd: 0.00258  },
  { code: "AZN", name: "Azerbaijani Manat",      symbol: "₼",    decimals: 2, rateToUsd: 0.588    },
  { code: "KGS", name: "Kyrgyzstani Som",        symbol: "с",    decimals: 2, rateToUsd: 0.0115   },
  { code: "UZS", name: "Uzbekistani Som",        symbol: "so'm", decimals: 0, rateToUsd: 0.000079 },
  // Turkey & Middle East
  { code: "TRY", name: "Turkish Lira",           symbol: "₺",    decimals: 2, rateToUsd: 0.031    },
  { code: "ILS", name: "Israeli Shekel",         symbol: "₪",    decimals: 2, rateToUsd: 0.272    },
  { code: "SAR", name: "Saudi Riyal",            symbol: "﷼",    decimals: 2, rateToUsd: 0.267    },
  { code: "AED", name: "UAE Dirham",             symbol: "د.إ",  decimals: 2, rateToUsd: 0.272    },
  { code: "QAR", name: "Qatari Riyal",           symbol: "﷼",    decimals: 2, rateToUsd: 0.275    },
  { code: "KWD", name: "Kuwaiti Dinar",          symbol: "KD",   decimals: 3, rateToUsd: 3.26     },
  { code: "BHD", name: "Bahraini Dinar",         symbol: "BD",   decimals: 3, rateToUsd: 2.65     },
  { code: "OMR", name: "Omani Rial",             symbol: "ر.ع.", decimals: 3, rateToUsd: 2.60     },
  { code: "JOD", name: "Jordanian Dinar",        symbol: "JD",   decimals: 3, rateToUsd: 1.41     },
  { code: "IQD", name: "Iraqi Dinar",            symbol: "ع.د",  decimals: 0, rateToUsd: 0.00076  },
  { code: "IRR", name: "Iranian Rial",           symbol: "﷼",    decimals: 0, rateToUsd: 0.0000238},
  { code: "LBP", name: "Lebanese Pound",         symbol: "ل.ل",  decimals: 0, rateToUsd: 0.0000112},
  { code: "SYP", name: "Syrian Pound",           symbol: "ل.س",  decimals: 0, rateToUsd: 0.000077 },
  { code: "YER", name: "Yemeni Rial",            symbol: "﷼",    decimals: 0, rateToUsd: 0.004    },
  // South & Southeast Asia
  { code: "INR", name: "Indian Rupee",           symbol: "₹",    decimals: 2, rateToUsd: 0.012    },
  { code: "PKR", name: "Pakistani Rupee",        symbol: "₨",    decimals: 2, rateToUsd: 0.0036   },
  { code: "BDT", name: "Bangladeshi Taka",       symbol: "৳",    decimals: 2, rateToUsd: 0.0091   },
  { code: "NPR", name: "Nepali Rupee",           symbol: "रू",   decimals: 2, rateToUsd: 0.0075   },
  { code: "LKR", name: "Sri Lankan Rupee",       symbol: "රු",   decimals: 2, rateToUsd: 0.0034   },
  { code: "MYR", name: "Malaysian Ringgit",      symbol: "RM",   decimals: 2, rateToUsd: 0.226    },
  { code: "IDR", name: "Indonesian Rupiah",      symbol: "Rp",   decimals: 0, rateToUsd: 0.000063 },
  { code: "PHP", name: "Philippine Peso",        symbol: "₱",    decimals: 2, rateToUsd: 0.0174   },
  { code: "THB", name: "Thai Baht",              symbol: "฿",    decimals: 2, rateToUsd: 0.028    },
  { code: "VND", name: "Vietnamese Dong",        symbol: "₫",    decimals: 0, rateToUsd: 0.0000394},
  { code: "BND", name: "Brunei Dollar",          symbol: "B$",   decimals: 2, rateToUsd: 0.745    },
  // East Asia
  { code: "KRW", name: "South Korean Won",       symbol: "₩",    decimals: 0, rateToUsd: 0.00073  },
  { code: "TWD", name: "Taiwan Dollar",          symbol: "NT$",  decimals: 2, rateToUsd: 0.031    },
  // Africa
  { code: "EGP", name: "Egyptian Pound",         symbol: "E£",   decimals: 2, rateToUsd: 0.021    },
  { code: "NGN", name: "Nigerian Naira",         symbol: "₦",    decimals: 2, rateToUsd: 0.00065  },
  { code: "KES", name: "Kenyan Shilling",        symbol: "KSh",  decimals: 2, rateToUsd: 0.0077   },
  { code: "ZAR", name: "South African Rand",     symbol: "R",    decimals: 2, rateToUsd: 0.054    },
  { code: "GHS", name: "Ghanaian Cedi",          symbol: "₵",    decimals: 2, rateToUsd: 0.069    },
  { code: "MAD", name: "Moroccan Dirham",        symbol: "د.م.", decimals: 2, rateToUsd: 0.099    },
  { code: "DZD", name: "Algerian Dinar",         symbol: "دج",   decimals: 2, rateToUsd: 0.0074   },
  { code: "TND", name: "Tunisian Dinar",         symbol: "DT",   decimals: 3, rateToUsd: 0.319    },
  { code: "LYD", name: "Libyan Dinar",           symbol: "ل.د",  decimals: 3, rateToUsd: 0.208    },
  { code: "XOF", name: "West African CFA Franc", symbol: "CFA",  decimals: 0, rateToUsd: 0.00163  },
  // Americas
  { code: "MXN", name: "Mexican Peso",           symbol: "MX$",  decimals: 2, rateToUsd: 0.051    },
  { code: "BRL", name: "Brazilian Real",         symbol: "R$",   decimals: 2, rateToUsd: 0.185    },
  { code: "ARS", name: "Argentine Peso",         symbol: "$",    decimals: 2, rateToUsd: 0.00102  },
  { code: "CLP", name: "Chilean Peso",           symbol: "$",    decimals: 0, rateToUsd: 0.00108  },
  { code: "COP", name: "Colombian Peso",         symbol: "$",    decimals: 0, rateToUsd: 0.00024  },
  { code: "PEN", name: "Peruvian Sol",           symbol: "S/",   decimals: 2, rateToUsd: 0.265    },
  { code: "BOB", name: "Bolivian Boliviano",     symbol: "Bs.",  decimals: 2, rateToUsd: 0.144    },
  { code: "CRC", name: "Costa Rican Colón",      symbol: "₡",    decimals: 0, rateToUsd: 0.00193  },
  // Caucasus / Central Asia (Afghan)
  { code: "AFN", name: "Afghan Afghani",         symbol: "؋",    decimals: 2, rateToUsd: 0.0144   },
];

export const DEFAULT_CODES: CurrencyCode[] = ["USD", "EUR", "GBP", "JPY"];

export function getCurrencyMeta(code: CurrencyCode): CurrencyMeta {
  const c = mockCurrencies.find((x) => x.code === code);
  if (!c) throw new Error(`Unknown currency ${code}`);
  return c;
}

export function flagForCode(code: string): string {
  return currencyFlagAssets[code]?.emoji ?? "◯";
}
