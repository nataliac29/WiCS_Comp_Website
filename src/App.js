import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
