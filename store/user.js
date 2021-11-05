export const state = () => ({
  user: {}
})


export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const getters = {
  user(state) {
    return state.user
  },
  isLoggedIn(state) {
    return !!state.user.id
  }
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const { data } = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      commit('setUser', data.user)
      return data.user
    } catch (e) {
      throw e
    }
  },
  async register({ commit }, { email, password }) {
    try {
      const { data } = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      commit('setUser', data.user)
      return data.user
    } catch (e) {
      throw e
    }
  }
}