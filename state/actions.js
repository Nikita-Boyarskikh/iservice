import initialState from './default'

export const LOGIN = 'login'
export const LOGOUT = 'logout'

const ACTIONS = {
  [LOGIN]: async (state, data) => {
    return {
      ...state,
      user: data,
    }
  },

  [LOGOUT]: async (state) => {
    return {
      ...state,
      user: initialState.user,
    }
  },
}

async function reducer(state, action) {
  if (!action.type in ACTIONS) {
    return state
  }

  const handler = ACTIONS[action.type]
  return await handler(state, action.data)
}

export default reducer
