import { range } from 'lib/utils'

const initialState = {
  user: {
    account: null,
  },

  reviews: range(4).map(() => ({})),
  articles: range(4).map(() => ({})),
}

export default initialState
