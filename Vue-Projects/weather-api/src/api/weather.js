import axios from 'axios';

const state = {
  currentWeather: null,
  forecast: null,
  error: null,
};

const getters = {
  currentWeather: state => state.currentWeather,
  forecast: state => state.forecast,
  error: state => state.error,
};

const actions = {
  async fetchCurrentWeather({ commit }, location) {
    try {
      const response = await axios.get(`/api/weather/current/${location}`);
      commit('setCurrentWeather', response.data);
    } catch (error) {
      commit('setError', error.message);
    }
  },
  async fetchForecast({ commit }, location) {
    try {
      const response = await axios.get(`/api/weather/forecast/${location}`);
      commit('setForecast', response.data);
    } catch (error) {
      commit('setError', error.message);
    }
  },
};

const mutations = {
  setCurrentWeather: (state, data) => (state.currentWeather = data),
  setForecast: (state, data) => (state.forecast = data),
  setError: (state, error) => (state.error = error),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
