import type { Route } from '../../../../Routes/type';
import { BREADCRUMB_CONFIG } from '../constants';

export const capitalizeFirstLetter = (str: string): string => {
  if (!str || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCapitalizedRouteName = (pathname: string): string => {
  const routeName = pathname === '/' ? 'default' : pathname.substring(1);
  return capitalizeFirstLetter(routeName);
};

export const findRouteByPath = (
  routes: Route[],
  path: string
): Route | null => {
  for (const route of routes) {
    if (route.path === path) {
      return route;
    }
    if (route.children) {
      const found = findRouteByPath(route.children, path);
      if (found) return found;
    }
  }
  return null;
};

export const getBreadcrumbItems = (routes: Route[], currentPath: string) => {
  const items: Array<{ title: string; path: string }> = [
    {
      title: BREADCRUMB_CONFIG.defaultTitle,
      path: BREADCRUMB_CONFIG.defaultPath,
    },
  ];

  if (currentPath === '/' || currentPath === BREADCRUMB_CONFIG.defaultPath) {
    return items;
  }

  const pathSegments = currentPath.split('/').filter(Boolean);
  let currentRoutePath = '';

  for (const segment of pathSegments) {
    currentRoutePath += `/${segment}`;
    const route = findRouteByPath(routes, currentRoutePath);
    if (route && route.name) {
      items.push({
        title: route.name,
        path: currentRoutePath,
      });
    }
  }

  return items;
};
