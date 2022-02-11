import { googleSignOut } from "../../auth/firebase.utils";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getAuth, signOut } from "firebase/auth";

const state = {
  userData: {
    displayName: "",
    email: "",
    photoURL: "",
  },
  isLoggedIn: false,
};

const mutations = {
  LOGIN_USER(state, payload) {
    state.userData.displayName = payload.user.displayName;
    state.userData.email = payload.user.email;
    state.userData.photoURL = payload.user.photoURL;
    state.isLoggedIn = true;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = !state.isLoggedIn;
    state.userData = {};
  },
};
const actions = {
  loginUser({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        commit("LOGIN_USER", result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logoutUser({ commit }) {
    googleSignOut();
    commit("LOGOUT_USER");
  },
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  getUserData: (state) => state.userData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
