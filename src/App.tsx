import { MultiCurrencyConverter } from "./components/converter/MultiCurrencyConverter";
import { AppShell } from "./components/layout/AppShell";

export default function App() {
  return (
    <AppShell>
      <MultiCurrencyConverter />
    </AppShell>
  );
}
