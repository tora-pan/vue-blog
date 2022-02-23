<template>
  <div class="container mx-auto">
    <h1>Admin Page</h1>

    <!-- List of blogs -->
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date Posted
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="post in thePosts"
                  :key="post.id"
                  class="bg-white border-b transition duration-75 ease-in-out hover:bg-gray-100"
                >
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ post.blogData.BlogID }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ post.blogData.BlogTitle }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ post.blogData.DateCreated }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer text-center"
                  >
                    <button
                      type="button"
                      class="px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-75 ease-in-out"
                      @click="editBlog(post.id)"
                    >
                      Edit
                    </button>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointertext-center"
                    @click="deleteBlog(post.id)"
                  >
                    <button
                      type="button"
                      class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-75 ease-in-out"
                      @click="editBlog(post.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <Modal
      @close="closeModal"
      v-show="isModalVisible"
      :blogText="currentBlogPost ? currentBlogPost[0].BlogText : ''"
      :titleText="currentBlogPost ? currentBlogPost[0].BlogTitle : ''"
    />
    <!-- New Blog Form -->
    <BlogForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "../components/Modal";
import BlogForm from "../components/BlogForm.vue";
export default {
  name: "Admin",
  data() {
    return {
      blogPosts: null,
      toggleModal: false,
      currentBlogPost: "",
      isModalVisible: false,

      BlogAuthor: "",
      BlogID: null,
      BlogImageURL: "",
      BlogText: "",
      BlogTitle: "",
      DateCreated: null,
    };
  },
  watch: {
    allBlogs(newPosts, oldPosts) {
      console.log(`We have ${newPosts}, posts now, yay!`);
      console.log(`The old posts is ${oldPosts}`);
    },
  },
  components: {
    Modal,
    BlogForm,
  },
  computed: {
    ...mapGetters({ thePosts: "getAllBlogs" }),
  },
  created() {
    this.$store.dispatch("getAllBlogs");
    console.log(this.thePosts);
  },
  methods: {
    editBlog(blogId) {
      this.currentBlogPost = this.thePosts.filter(
        (blog) => blog.BlogID === parseInt(blogId)
      );
      this.showModal();
    },
    deleteBlog(blogId) {
      // todo
      console.log(`delete blog ${blogId}`);
    },
    getSelectedBlog(blogId) {
      this.currentBlogPost = this.blogPosts.filter(
        (blog) => blog.id === blogId
      );
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
