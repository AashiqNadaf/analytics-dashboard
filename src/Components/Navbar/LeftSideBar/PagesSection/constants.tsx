export const PAGES_TAB = 'Pages';
import { ReactComponent as DarkUserProfileIcon } from '../../../../Icons/DarkUserIcon.svg';
import { ReactComponent as LightUserProfileIcon } from '../../../../Icons/LightUserIcon.svg';
import { ReactComponent as DarkAccountIcon } from '../../../../Icons/DarkAccountIcon.svg';
import { ReactComponent as LightAccountIcon } from '../../../../Icons/LightAccountIcon.svg';
import { ReactComponent as DarkCorporateIcon } from '../../../../Icons/DarkCorporateIcon.svg';
import { ReactComponent as LightCorporateIcon } from '../../../../Icons/LightCorporateIcon.svg';
import { ReactComponent as DarkSocialIcon } from '../../../../Icons/DarkSocialIcon.svg';
import { ReactComponent as LightSocialIcon } from '../../../../Icons/LightSocialIcon.svg';
import { ReactComponent as DarkBlogIcon } from '../../../../Icons/DarkBlogIcon.svg';
import { ReactComponent as LightBlogIcon } from '../../../../Icons/LightBlogIcon.svg';

import WorkInProgress from '../../../Common/WorkInProgress';
import type { Routes } from '../../../../Routes/type';

export const pages: Routes = [
  {
    path: '/user-profile',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightUserProfileIcon,
    darkThemeIcon: DarkUserProfileIcon,
    name: 'User Profile',
    children: [
      {
        path: '/user-profile/overview',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Overview',
      },
      {
        path: '/user-profile/projects-1',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Projects',
      },
      {
        path: '/user-profile/campaigns',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Campaigns',
      },
      {
        path: '/user-profile/documents',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Documents',
      },
      {
        path: '/user-profile/followers',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Followers',
      },
    ],
  },
  {
    path: '/account',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightAccountIcon,
    darkThemeIcon: DarkAccountIcon,
    name: 'Account',
  },
  {
    path: '/corporate',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightCorporateIcon,
    darkThemeIcon: DarkCorporateIcon,
    name: 'E-Commerce',
    children: [
      {
        path: '/corporate/products',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Products',
      },
    ],
  },
  {
    path: '/blog',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightBlogIcon,
    darkThemeIcon: DarkBlogIcon,
    name: 'Projects',
    children: [
      {
        path: '/blog/blog-1',
        element: <WorkInProgress />,
        isFavorite: false,
        name: 'Projects 1',
      },
      {
        path: '/blog/blog-2',
        element: <WorkInProgress />,
        isFavorite: false,

        name: 'Projects 2',
      },
    ],
  },
  {
    path: '/social',
    element: <WorkInProgress />,
    isFavorite: false,
    lightThemeIcon: LightSocialIcon,
    darkThemeIcon: DarkSocialIcon,
    name: 'Online Courses',
  },
];
