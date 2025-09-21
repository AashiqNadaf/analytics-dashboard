export const isDarkBackground = (backgroundColor: string): boolean => {
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

export const getTextColor = (
  title: string,
  backgroundColor: string,
  themeText: string
): string => {
  const isThemeFriendly = title === 'Orders' || title === 'Revenue';
  const isDark = isDarkBackground(backgroundColor);

  return isThemeFriendly ? themeText : isDark ? '#FFFFFF' : '#1C1C1C';
};
