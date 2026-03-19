/**
 * Cyrillic → Latin transliteration for search.
 * Covers Russian, Ukrainian, and other Cyrillic scripts.
 */
const CYRILLIC_TO_LATIN: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  // Ukrainian
  є: "ye", і: "i", ї: "yi", ґ: "g",
  // Uppercase
  А: "a", Б: "b", В: "v", Г: "g", Д: "d", Е: "e", Ё: "e", Ж: "zh", З: "z",
  И: "i", Й: "y", К: "k", Л: "l", М: "m", Н: "n", О: "o", П: "p", Р: "r",
  С: "s", Т: "t", У: "u", Ф: "f", Х: "h", Ц: "ts", Ч: "ch", Ш: "sh", Щ: "sch",
  Ъ: "", Ы: "y", Ь: "", Э: "e", Ю: "yu", Я: "ya",
  Є: "ye", І: "i", Ї: "yi", Ґ: "g",
};

/** Common Cyrillic search aliases → Latin (for words that don't transliterate 1:1) */
const SEARCH_ALIASES: Record<string, string> = {
  евро: "euro",
  доллар: "dollar",
  фунт: "pound",
  йена: "yen",
  юань: "yuan",
  франк: "franc",
  крона: "krone",
  гривна: "hryvnia",
  тенге: "tenge",
  сом: "som",
  лев: "lev",
  лей: "lei",
  злотый: "zloty",
  песо: "peso",
  реал: "real",
  рупия: "rupee",
  бат: "baht",
  донг: "dong",
  ринггит: "ringgit",
};

/** Normalize search query: transliterate Cyrillic to Latin, lowercase */
export function normalizeSearchQuery(query: string): string {
  const trimmed = query.trim().toLowerCase();
  const alias = SEARCH_ALIASES[trimmed];
  if (alias) return alias;
  let result = "";
  for (const char of query) {
    result += CYRILLIC_TO_LATIN[char] ?? char;
  }
  return result.toLowerCase().trim();
}

/** Check if text matches query (supports both Latin and Cyrillic input) */
export function matchesSearch(text: string, query: string): boolean {
  if (!query) return true;
  const q = normalizeSearchQuery(query);
  const textLower = text.toLowerCase();
  return textLower.includes(q) || textLower.startsWith(q);
}
