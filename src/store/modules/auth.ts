import { Credentials } from '@/models/credentials.interface';
import { authService } from '@/services/auth.service';
import jwtHelper from '@/helpers/jwtHelpers';

export interface AuthState {
  token: string;
  status: string;
  isAdmin: boolean;
}

const state: AuthState = {
  token: '',
  status: '',
  isAdmin: false
};

const getters = {
  isAdmin: (authState: AuthState) =>
    jwtHelper.parseJwt(authState.token).id == 1,
  isAuthenticated: (authState: AuthState) => !!authState.token,
  authStatus: (authState: AuthState) => authState.status,
  authToken: (authState: AuthState) => authState.token
};

const actions = {
  authRequest: (
    { commit, dispatch }: { commit: any; dispatch: any },
    credentials: Credentials
  ) => {
    return new Promise((resolve, reject) => {
      commit('authRequest');
      authService.login(credentials).subscribe(
        (result: any) => {
          commit('authSuccess', result);
          resolve(result);
        },
        (errors: any) => {
          commit('authError', errors);
          reject(errors);
        }
      );
    });
  },
  authLogout: ({ commit, dispatch }: { commit: any; dispatch: any }) => {
    return new Promise((resolve, reject) => {
      commit('authLogout');
      localStorage.removeItem('auth-token');
      resolve();
    });
  }
};

const mutations = {
  authRequest: (authState: AuthState) => {
    authState.status = 'attempting authentication request';
  },
  authSuccess: (authState: AuthState, authToken: string) => {
    authState.status = 'authentication succeeded';
    authState.token = authToken;
  },
  authError: (authState: AuthState) => {
    authState.status = 'error';
  },
  authLogout: (authState: AuthState) => {
    authState.token = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
