# Currency converter — prototype

React + Vite + TypeScript. **All rates and assets are mocked** for feature prototyping.

## Run

```bash
npm install
npm run dev
```

Open the dev URL on your phone (same Wi‑Fi) to verify **Mobile Safari**; build for static hosting:

```bash
npm run build
npm run preview
```

## Structure

| Path | Role |
|------|------|
| `src/design-system/` | Tokens (`tokens.css`, `tokens.ts`), primitives (`Card`, `Text`, `AmountField`) |
| `src/data/currencies.mock.ts` | Currency list + mock USD rates |
| `src/data/uiAssets.metadata.ts` | Image/icon metadata (replace `src` when wiring real assets) |
| `src/components/converter/` | `MultiCurrencyConverter`, `CurrencyRow` |
| `src/components/layout/` | `AppShell` |

Tap a row to edit that currency; others update from a shared USD base (mock math).
