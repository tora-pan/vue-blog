<template>
  <div class="p-4">
    <div
      class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-full max-h-96 object-contain"
          :src="currentBlogPost.blogData.BlogImageURL"
          alt=""
        />
      </a>
      <h2 class="mt-2 ml-4 text-gray-600">
        Posted: {{ currentBlogPost.blogData.DateCreated }}
      </h2>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ currentBlogPost.blogData.BlogTitle }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ currentBlogPost.blogData.BlogText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "BlogDetail",
  data() {
    return {
      currentBlogPost: [],
    };
  },
  created() {
    this.$store.dispatch("setCurrentlyViewing", this.$route.params.id);
    this.currentBlogPost = this.$store.getters.getBlogById[0];
  },
};
</script>
