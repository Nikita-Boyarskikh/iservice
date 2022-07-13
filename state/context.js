import { getArticles, getReviews, getUser } from 'lib/api'
import React, { useEffect } from 'react'

import reducer, { SET_ARTICLES, SET_REVIEWS, SET_USER } from './actions'
import initialState from './default'

export const StateContext = React.createContext({})

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState, x => x)

  useEffect(() => {
    getUser().then(user => {
      dispatch({ type: SET_USER, data: user })
    })

    getReviews().then(reviews => {
      dispatch({ type: SET_REVIEWS, data: reviews })
    })

    getArticles().then(articles => {
      dispatch({ type: SET_ARTICLES, data: articles })
    })
  }, [])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      { children }
    </StateContext.Provider>
  )
}
