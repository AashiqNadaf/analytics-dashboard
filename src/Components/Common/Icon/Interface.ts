export type IconButtonProps = {
  lightThemeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  darkThemeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  onClick?: () => void;
};
