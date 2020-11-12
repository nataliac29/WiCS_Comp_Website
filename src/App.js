import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import AppRouter from './routes/AppRouter'
import GlobalContext from './utils/globalContext'

const App = () => (
  <div className="App">
    <GlobalContext>
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <AppRouter />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    </GlobalContext>
  </div>
)

export default App 
