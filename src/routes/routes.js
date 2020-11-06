import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Progress from '../containers/Progress'
import AddEvent from '../containers/AddEvent'
import Resources from '../containers/Resources'


import { ROUTE_PATHS } from '../utils/constants'

export const routes = {
  home: {
    path: ROUTE_PATHS.HOME,
    routeComponent: PublicRoute,
    component: Home,
    exact: true,
  },
  login: {
    path: ROUTE_PATHS.LOGIN,
    routeComponent: PublicRoute,
    component: Login,
    exact: true,
  },
  register: {
    path: ROUTE_PATHS.REGISTER,
    routeComponent: PublicRoute,
    component: Register,
    exact: true,
  },
  team: {
    path: ROUTE_PATHS.ADDEVENT,
    routeComponent: PrivateRoute,
    component: AddEvent,
    exact: true,
  },
  courses: {
    path: ROUTE_PATHS.PROGRESS,
    routeComponent: PrivateRoute,
    component: Progress,
    exact: true,
  },
  resources: {
    path: ROUTE_PATHS.RESOURCES,
    routeComponent: PublicRoute,
    component: Resources,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
