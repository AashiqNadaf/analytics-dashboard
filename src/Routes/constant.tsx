import { type Routes } from './type';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ReactComponent as LightDefaultIcon } from '../Icons/LightDefaultIcon.svg';
import { ReactComponent as DarkDefaultIcon } from '../Icons/DarkDefaultIcon.svg';
import { ReactComponent as LightOrdersIcon } from '../Icons/LightOrderIcon.svg';
import { ReactComponent as DarkOrdersIcon } from '../Icons/DarkOrderIcon.svg';
import { ReactComponent as LightECommerceIcon } from '../Icons/LightEcomIcon.svg';
import { ReactComponent as DarkECommerceIcon } from '../Icons/DarkEcomIcon.svg';
import { ReactComponent as LightProjectsIcon } from '../Icons/LightProjectIcon.svg';
import { ReactComponent as DarkProjectsIcon } from '../Icons/DarkProjectIcon.svg';
import { ReactComponent as LightOnlineCoursesIcon } from '../Icons/LightCourseIcon.svg';
import { ReactComponent as DarkOnlineCoursesIcon } from '../Icons/DarkCourseIcon.svg';

const Dashboard = lazy(() => import('../Pages/Dashboard'));
const Orders = lazy(() => import('../Pages/Orders'));
const WorkInProgress = lazy(
  () => import('../Components/Common/WorkInProgress')
);

export const routes: Routes = [
  {
    path: '/',
    element: <Navigate to="/default" replace />,
    isFavorite: false,
  },
  {
    path: '/default',
    element: <Dashboard />,
    isFavorite: false,
    lightThemeIcon: LightDefaultIcon,
    darkThemeIcon: DarkDefaultIcon,
    name: 'Default',
  },
  {
    path: '/orders',
    element: <Orders />,
    isFavorite: false,
    lightThemeIcon: LightOrdersIcon,
    darkThemeIcon: DarkOrdersIcon,
    name: 'Orders',
  },
  {
    path: '/eCommerce',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightECommerceIcon,
    darkThemeIcon: DarkECommerceIcon,
    name: 'E-Commerce',
    children: [
      {
        path: '/eCommerce/products',
        element: <WorkInProgress />,
        isFavorite: false,
        lightThemeIcon: LightDefaultIcon,
        darkThemeIcon: DarkDefaultIcon,
        name: 'Products',
      },
    ],
  },
  {
    path: '/projects',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightProjectsIcon,
    darkThemeIcon: DarkProjectsIcon,
    name: 'Projects',
    children: [
      {
        path: '/projects/projects-1',
        element: <WorkInProgress />,
        isFavorite: false,
        lightThemeIcon: LightDefaultIcon,
        darkThemeIcon: DarkDefaultIcon,
        name: 'Projects 1',
      },
      {
        path: '/projects/projects-2',
        element: <WorkInProgress />,
        isFavorite: false,
        lightThemeIcon: LightDefaultIcon,
        darkThemeIcon: DarkDefaultIcon,
        name: 'Projects 2',
      },
    ],
  },
  {
    path: '/online-courses',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightOnlineCoursesIcon,
    darkThemeIcon: DarkOnlineCoursesIcon,
    name: 'Online Courses',
    children: [
      {
        path: '/online-courses/courses-1',
        element: <WorkInProgress />,
        isFavorite: false,
        lightThemeIcon: LightDefaultIcon,
        darkThemeIcon: DarkDefaultIcon,
        name: 'Courses 1',
      },
    ],
  },
  {
    path: '*',
    element: <WorkInProgress />,
    isFavorite: false,
    name: 'Not Found',
  },
];
