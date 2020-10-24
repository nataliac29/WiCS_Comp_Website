import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { renderRoutes } from './routes'

const AppRouter = () => (
  <Switch>
    {renderRoutes.map(([key, value]) => (
      <Route
        key={key}
        path={value.path}
        exact={value.exact}
        render={props => (
          <value.routeComponent>
            <value.component {...props} />
          </value.routeComponent>
        )}
      />
    ))}
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
)

export default AppRouter
