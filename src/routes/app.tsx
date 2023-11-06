import { lazy, Suspense } from 'react';
import { RoutesEnum } from '../common/constants/routes';
import RequireAuth from '../components/RequireAuth';
import { Box } from '@mui/material';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Favorites = lazy(() => import('../pages/Favorites'));

const app = [
  {
    path: RoutesEnum.LOGIN,
    component: Login,
    exact: true,
  },
  {
    path: RoutesEnum.HOME,
    component: Home,
    exact: true,
    protected: true,
  },
  {
    path: RoutesEnum.FAVORITES,
    component: Favorites,
    exact: true,
  },
];

const routes = app.map((route) => {
  if (route.protected) {
    return {
      ...route,
      component: () => (
        <RequireAuth>
          <Suspense fallback={<Box>Loading...</Box>}>
            <route.component />
          </Suspense>
        </RequireAuth>
      ),
    };
  } else {
    return {
      ...route,
      component: () => (
        <Suspense fallback={<Box>Loading...</Box>}>
          <route.component />
        </Suspense>
      ),
    };
  }
});

export default routes;
