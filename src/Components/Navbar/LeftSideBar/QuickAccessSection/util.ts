export const trimRoute = (route: string): string => {
  const routeName = route.substring(1);
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
};