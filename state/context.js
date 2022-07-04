import React from 'react'

import reducer from './actions'
import initialState from './default'

export const StateContext = React.createContext()

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      { children }
    </StateContext.Provider>
  )
}
