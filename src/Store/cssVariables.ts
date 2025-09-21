import type { Theme } from './interface';

export const getCSSVariables = (theme: Theme) =>
  ({
    '--secondary-text': theme.secondaryText,
    '--text-color': theme.text,
    '--background-color': theme.background,
    '--border-color': theme.border,
    '--placeholder-color': theme.placeholder,
    '--primary-color': theme.primary,
    '--secondary-color': theme.secondary,
    '--tertiary-color': theme.tertiary,
  } as React.CSSProperties);

export const CSS_VARIABLE_KEYS = {
  SECONDARY_TEXT: '--secondary-text',
  TEXT_COLOR: '--text-color',
  BACKGROUND_COLOR: '--background-color',
  BORDER_COLOR: '--border-color',
  PLACEHOLDER_COLOR: '--placeholder-color',
  PRIMARY_COLOR: '--primary-color',
  SECONDARY_COLOR: '--secondary-color',
  TERTIARY_COLOR: '--tertiary-color',
} as const;
