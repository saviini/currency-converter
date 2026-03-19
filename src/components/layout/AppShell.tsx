import type { ReactNode } from "react";

import { Text } from "../../design-system";
import { uiAssetsMetadata } from "../../data/uiAssets.metadata";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const mark = uiAssetsMetadata["brand-mark"];
  return (
    <div className="app-shell">
      <header className="app-header">
        <div
          className="app-header__mark"
          role="img"
          aria-label={mark.alt}
          title={mark.label}
        >
          $
        </div>
        <div className="app-header__titles">
          <Text as="h1" variant="display">
            Convert
          </Text>
          <Text variant="bodySm">Multi-currency prototype · mocked data</Text>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer-note">
        <Text variant="micro">Design tokens · src/design-system · data · src/data</Text>
      </footer>
    </div>
  );
}
