/**
 * Design system — semantic tokens (mirror tokens.css).
 * Use for JS-driven layout or tests; prefer CSS variables in styles.
 */
export const designTokens = {
  color: {
    bgBase: "#0f1419",
    bgElevated: "#1a222c",
    bgSurface: "#242d3a",
    borderSubtle: "rgba(255, 255, 255, 0.06)",
    borderStrong: "rgba(255, 255, 255, 0.12)",
    textPrimary: "#f4f6f8",
    textSecondary: "#8b98a8",
    textMuted: "#5c6b7d",
    accent: "#3d9cf5",
    accentMuted: "rgba(61, 156, 245, 0.15)",
    positive: "#34c759",
    negative: "#ff453a",
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
    xl: 20,
    full: 9999,
  },
  type: {
    /** px */
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
