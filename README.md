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

## Publish to GitHub

1. On [github.com/new](https://github.com/new) create an **empty** repository (no README / .gitignore).
2. In the project folder:

```bash
cd "/Users/vvsavinova/Desktop/currency exchange"
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Use **SSH** if you prefer: `git@github.com:YOUR_USER/YOUR_REPO.git`

If Git asks to log in, use a [Personal Access Token](https://github.com/settings/tokens) as the password (HTTPS), or set up SSH keys.

**Git author** for this repo is set locally to `vvsavinova` / `vvsavinova@users.noreply.github.com`. Change with:

`git config user.name "Your Name"` and `git config user.email "your@email.com"` (in this folder, without `--global`).
