import Vue from 'vue';
import Vuex, { Payload } from 'vuex';
import VuexPersistence from 'vuex-persist';
import Cookies from 'js-cookie';
import auth, { AuthState } from './modules/auth';

export interface State {
  auth: AuthState;
}

const vuexCookie = new VuexPersistence<State>({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) =>
    Cookies.set(key, state, {
      expires: 3
    }),
  modules: ['auth'],
  filter: (mutation) =>
    mutation.type == 'auth/authSuccess' ||
    mutation.type == 'auth/authError' ||
    mutation.type == 'auth/authLogout'
});

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: { auth: { token: '', isAdmin: false, status: '' } },
  mutations: {},
  actions: {},
  plugins: [vuexCookie.plugin],
  modules: {
    auth: {
      namespaced: true,
      state: auth.state,
      mutations: auth.mutations,
      getters: auth.getters,
      actions: auth.actions
    }
  }
});
