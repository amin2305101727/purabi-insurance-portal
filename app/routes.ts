export interface AppRoute {
  path: string;
  name: string;
  exact?: boolean;
}

export const APP_ROUTES: AppRoute[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
  },
  {
    path: '/about',
    name: 'About Us',
  },
  {
    path: '/services',
    name: 'Services',
  },
  {
    path: '/claims',
    name: 'Claims',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

export { AppRoutes } from './routes/index';
