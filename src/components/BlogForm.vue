<template>
  <h1 class="text-2xl mt-20">New Blog Entry</h1>
  <div class="mb-6">
    <label
      for="base-input"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Blog Title</label
    >
    <input
      type="text"
      id="base-input"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      v-model="blogTitle"
    />
  </div>

  <label
    for="message"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >Blog Text</label
  >
  <textarea
    id="message"
    rows="4"
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-96"
    placeholder="Type your blog here..."
    v-model="blogText"
  ></textarea>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    @click="addBlog({ blogTitle: blogTitle, blogText: blogText })"
  >
    Save Blog
  </button>
</template>

<script>
import { addNewBlog } from "../firebase/firebase.utils";
export default {
  name: "BlogForm",
  data() {
    return {
      blogTitle: "",
      blogText: "",
    };
  },
  methods: {
    addBlog(data) {
      const blog = {
        BlogAuthor: "Travis Pandos",
        BlogImageURL: "Test2.png",
        BlogText: data.blogText,
        BlogTitle: data.blogTitle,
        DateCreated: new Date().toISOString().slice(0, 10),
      };
      addNewBlog(blog);
      this.$store.dispatch("newGetAllBlogs");
    },
  },
};
</script>
