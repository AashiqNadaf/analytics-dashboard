import type { Route } from '../../../Routes/type';

export interface DashboardItemProps {
  route: Route;
  isActive: string;
  handleRouteClick: (path: string) => void;
}
