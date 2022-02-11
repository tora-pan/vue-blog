import { createStore } from "vuex";
import blogs from "./modules/blogs";
import auth from "./modules/auth";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    blogs,
    auth,
  },
});
