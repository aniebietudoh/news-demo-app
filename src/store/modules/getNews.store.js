import fetchNews from '../../api/fetchNews.api';

const state = () => ({
  news: [],
});

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const getters = {
  seeAllNews(state) {
    return state.news;
  },
};

const actions = {
  async getAllNews({ commit }, pageSize) {
    try {
      const newsResponse = await fetchNews(pageSize);
      commit('SET_NEWS', newsResponse);
    } catch (error) {
      alert('Error Fetching News');
      throw error;
    }
  },
};

const mutations = {
  SET_NEWS(state, allNews) {
    state.news = allNews;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
