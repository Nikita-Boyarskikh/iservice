const initialState = {
  user: {
    account: 123,

    get isLoggedIn() {
      return this.account !== null
    },
  },
}

export default initialState
