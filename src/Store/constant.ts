import type { Theme } from './interface';

export const THEME_KEY = 'theme';
export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
export const lightTheme: Theme = {
  background: '#ffffff',
  text: '#1C1C1C',
  primary: '#F7F9FB',
  secondary: '#E3F5FF',
  tertiary: '#E3F5FF',
  border: '#1C1C1C1A',
  placeholder: '#1C1C1C80',
  currentTheme: 'light',
  secondaryText: '#1C1C1C66',
  tertiaryText: '#1C1C1C33',
  itemActiveBg: '#1C1C1C0D',
};

export const darkTheme: Theme = {
  background: '#1C1C1C',
  text: '#ffffff',
  primary: '#FFFFFF0D',
  secondary: '#E3F5FF',
  tertiary: '#E5ECF6',
  border: '#FFFFFF1A',
  placeholder: '#FFFFFF80',
  currentTheme: 'dark',
  secondaryText: '#FFFFFF66',
  tertiaryText: '#FFFFFF33',
  itemActiveBg: '#FFFFFF1A',
};

export const MAX_RECENTLY_VISITED = 3;

