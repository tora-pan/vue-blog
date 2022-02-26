import {
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from "../../firebase/firebase.utils";

const state = {
  blogs: [],
  currentlyViewing: null,
};
const mutations = {
  SET_CURRENTLY_VIEWING(state, payload) {
    state.currentlyViewing = payload;
  },
  SET_BLOG_DATA(state, payload) {
    state.blogs = [...payload];
  },
  ADD_BLOG(state, payload) {
    console.log(payload);
    state.blogs = [state.blogs, ...payload];
  },
  DELETE_BLOG(state, payload) {
    const i = state.blogs.map((item) => item.id).indexOf(payload);
    state.blogs.splice(i, 1);
    console.log("newBlogs: ", state.blogs);
  },
};
const actions = {
  setCurrentlyViewing({ commit }, payload) {
    commit("SET_CURRENTLY_VIEWING", payload);
  },
  async getAllBlogs({ commit }) {
    const data = await getAllBlogs();
    commit("SET_BLOG_DATA", data);
  },
  newGetAllBlogs({ commit }) {
    return new Promise((resolve, reject) => {
      getAllBlogs().then(
        (response) => {
          commit("SET_BLOG_DATA", response);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  addBlog({ commit }, data) {
    commit("ADD_BLOG", data);
  },
  deleteBlog({ commit }, data) {
    deleteBlog(data);
    commit("DELETE_BLOG", data);
  },
  updateBlogData(state, data) {
    console.log("thedata", data);
    updateBlog(data);
    // commit();
  },
};
const getters = {
  getAllBlogs: (state) => state.blogs,
  getFeaturedBlog: (state) => state.blogs[0],
  getSelectedBlog: (selectedId) =>
    state.blogs.filter((blog) => blog.id === parseInt(selectedId)),
  getBlogById: () =>
    state.blogs.filter((blog) => blog.id === state.currentlyViewing),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
