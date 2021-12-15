import React, {
  useReducer, createContext, useContext, useMemo,
} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { VIEWER } from './graphql'
import client from '../client'

const Context = createContext()
export const useGlobalContext = () => useContext(Context)

const viewerReducer = (prev, payload) => ({ ...prev, ...payload })

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(viewerReducer, {
    isSignedIn: !!localStorage.getItem('token') || false,
  })

  const { data, ...viewerRest } = useQuery(VIEWER, {
    client,
    onCompleted: () => {
      dispatch({ isSignedIn: true })
    },
    onError: () => {
      dispatch({ isSignedIn: false })
      localStorage.removeItem('token')
    },
    skip: !state.isSignedIn,
  })

  const globalState = useMemo(() => {
    const obj = { ...viewerRest, ...state }
    obj.viewer = (data && data.studentViewer) ? data.studentViewer : null
    obj.setIsSignedIn = input => {
      dispatch({ isSignedIn: input })
    }

    return obj
    // eslint-disable-next-line
  }, [state, data])

  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext
