export const state = () => ({
  movies: [],
  movie: {},
})

export const getters = {
  getMovies: (state) => state.movies,
  getMovie: (state) => state.movie,
}

export const mutations = {
  setMovies: (state, movies) => {
    state.movies = movies
  },
  setMovie: (state, movie) => {
    state.movie = movie
  }
}

export const actions = {
  async fetchMovies({ commit }, term) {
    const movies = await fetch(`/api/video?search=${term}`)
    commit('setMovies', movies)
  },
  async fetchMovie({ commit }, id) {
    const movie = await fetch(`/api/video?singlesearch${id}`)
    commit('setMovie', movie)
  }
}