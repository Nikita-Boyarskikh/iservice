// TODO: https://www.npmjs.com/package/redux-localstorage

class LocalStorage {
  get(key, defaultValue) {
    try {
      const value = localStorage.getItem(key)
      if (!value) {
        return defaultValue
      }

      return JSON.parse(value)
    } catch {
      console.warn(`Unable to load ${key} from local storage`)
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.warn(`Unable to store ${key} to local storage`)
    }
  }
}

export default class Store extends LocalStorage {
  REGISTRATION_STATE_KEY = 'registrationState'

  get registrationState() {
    return this.get(this.REGISTRATION_STATE_KEY)
  }

  set registrationState(value) {
    this.set(this.REGISTRATION_STATE_KEY, value)
  }
}
