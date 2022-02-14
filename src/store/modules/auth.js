import { googleSignOut } from "../../firebase/firebase.utils";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    console.log("gotcalled");
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
  async loginUser({ commit }) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
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
