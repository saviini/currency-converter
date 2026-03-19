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

## GitHub

**Remote (already configured in this clone):**  
`https://github.com/saviini/currency-converter.git`

Automated pushes from CI/agents cannot use your GitHub password — **you** publish from your Mac once:

```bash
cd "/Users/vvsavinova/Desktop/currency exchange"
git push -u origin main
```

- If the repo is new: create it empty at [github.com/new](https://github.com/new) (name `currency-converter`, same account `saviini`), then run the command above.
- If Git asks for credentials over HTTPS, use a [Personal Access Token](https://github.com/settings/tokens) as the password, or switch the remote to SSH:

`git remote set-url origin git@github.com:saviini/currency-converter.git`

**Git author** (local to this repo): `vvsavinova` / `vvsavinova@users.noreply.github.com` — change with `git config user.name` / `user.email` in this folder if needed.
