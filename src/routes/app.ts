import { lazy } from 'react'
import { RoutesEnum } from 'common/constants/routes'

const Home = lazy(() => import('pages/Home'))

const app = [
  {
    path: RoutesEnum.HOME,
    component: Home,
    exact: true,
  },
]

export default app
