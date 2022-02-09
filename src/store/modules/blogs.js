const state = {
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
};
const actions = {
  setCurrentlyViewing({ commit }, payload) {
    commit("SET_CURRENTLY_VIEWING", payload);
  },
};
const getters = {
  getAllBlogs: () => state.blogs,
  getFeaturedBlog: () => state.blogs[state.blogs.length - 1],
  getBlogById: () =>
    state.blogs.filter((blog) => blog.id === parseInt(state.currentlyViewing)),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
