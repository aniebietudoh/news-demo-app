import Vue from 'vue';
import Vuex from 'vuex';
import getNews from './modules/getNews.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    getNews,
  },
});
