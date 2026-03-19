/**
 * Design system — semantic tokens (mirror tokens.css).
 * Use for JS-driven layout or tests; prefer CSS variables in styles.
 */
export const designTokens = {
  color: {
    bgBase: "#0a0a0a",
    bgElevated: "rgba(255,255,255,0.04)",
    bgSurface: "rgba(255,255,255,0.07)",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.15)",
    textPrimary: "#f4f6f8",
    textSecondary: "#8b98a8",
    textMuted: "#5c6b7d",
    accent: "#ff5e3a",
    accentMuted: "rgba(255, 94, 58, 0.18)",
    positive: "#34c759",
    negative: "#ff453a",
  },
  glass: {
    blur: "20px",
    glowAccent: "0 0 0 1px rgba(255,94,58,0.4), 0 0 24px rgba(255,94,58,0.35)",
    glowCard: "0 8px 32px rgba(0,0,0,0.6)",
  },
  space: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 22,
    full: 9999,
  },
  type: {
    display: 28,
    title: 20,
    body: 17,
    bodySmall: 15,
    caption: 13,
    micro: 11,
  },
  touchTargetMin: 44,
} as const;

export type DesignTokens = typeof designTokens;
