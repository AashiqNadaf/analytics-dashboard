export type Route = {
  path: string;
  element: React.ReactNode;
  isFavorite: boolean;
  lightThemeIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  darkThemeIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  name?: string;
  children?: Route[];
};

export type Routes = Route[];
