import initialState from './default'

export const SET_REVIEWS = 'set_reviews'
export const SET_ARTICLES = 'set_articles'

export const SET_USER = 'set_user'
export const LOGOUT = 'logout'

const ACTIONS = {
  [SET_USER](state, data) {
    return {
      ...state,
      user: data,
    }
  },

  [SET_REVIEWS](state, data) {
    return {
      ...state,
      reviews: data,
    }
  },

  [SET_ARTICLES](state, data) {
    return {
      ...state,
      articles: data,
    }
  },

  [LOGOUT](state) {
    return {
      ...state,
      user: initialState.user,
    }
  },
}

function reducer(state, action) {
  if (!action.type in ACTIONS) {
    return state
  }

  const handler = ACTIONS[action.type]
  return handler(state, action.data)
}

export default reducer
