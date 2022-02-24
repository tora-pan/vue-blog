import { getAllBlogs, updateBlog } from "../../firebase/firebase.utils";

const state = {
  blogs2: [],
  blogs: [
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 1",
      summary:
        "Here is a little summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 1,
    },
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 2",
      summary:
        "Here is a little summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 2,
    },
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 3",
      summary:
        "Here is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 3,
    },
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 4",
      summary:
        "Here is a little summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 4,
    },
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 5",
      summary:
        "Here is a little summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 5,
    },
    {
      imageURL: "https://picsum.photos/400/300",
      title: "Test Blog Post 6",
      summary:
        "Here is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
      dateCreated: "2/7/2020",
      id: 6,
    },
  ],
  currentlyViewing: null,
};
const mutations = {
  SET_CURRENTLY_VIEWING(state, payload) {
    state.currentlyViewing = payload;
  },
  SET_BLOG_DATA(state, payload) {
    state.blogs2 = [...payload];
  },
  ADD_BLOG(state, payload) {
    state.blogs2 = [state.blogs2, ...payload];
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
  updateBlogData(state, data) {
    console.log("thedata", data);
    updateBlog(data);
    // commit();
  },
};
const getters = {
  getAllBlogs: () => state.blogs2,
  getFeaturedBlog: () => state.blogs2[0],
  getSelectedBlog: (selectedId) =>
    state.blogs2.filter((blog) => blog.id === parseInt(selectedId)),
  getBlogById: () =>
    state.blogs2.filter((blog) => blog.id === state.currentlyViewing),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
