import { lazy, Suspense } from 'react';
import { RoutesEnum } from '../common/constants/routes';
import RequireAuth from '../components/RequireAuth';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

const app = [
  {
    path: RoutesEnum.HOME,
    component: Home,
    exact: true,
    protected: true,
  },
  {
    path: RoutesEnum.LOGIN,
    component: Login,
    exact: true,
  },
];

const routes = app.map((route) => {
  if (route.protected) {
    return {
      ...route,
      component: () => (
        <RequireAuth>
          <Suspense fallback={<div>Loading...</div>}>
            <route.component />
          </Suspense>
        </RequireAuth>
      ),
    };
  } else {
    return {
      ...route,
      component: () => (
        <Suspense fallback={<div>Loading...</div>}>
          <route.component />
        </Suspense>
      ),
    };
  }
});

export default routes;
