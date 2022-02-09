<template>
  <div class="flex flex-col justify-center">
    <!-- Header -->
    <h1 class="text-4xl">My Blog</h1>
    <!-- Featured Blog Post -->
    <div class="w-5/6 mx-auto my-8">
      <FeaturedCard
        :imageURL="getFeaturedBlog.imageURL"
        :title="getFeaturedBlog.title"
        :summary="getFeaturedBlog.summary"
        :dateCreated="getFeaturedBlog.dateCreated"
        :id="getFeaturedBlog.id"
      />
    </div>
    <!-- Blog Post List -->
    <div class="mx-auto">
      <div class="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="" v-for="post in getAllBlogs" :key="post.id">
          <BlogCard
            :imageURL="post.imageURL"
            :title="post.title"
            :summary="post.summary"
            :dateCreated="post.dateCreated"
            :id="post.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import FeaturedCard from "../components/FeaturedCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getAllBlogs", "getFeaturedBlog"]),
  },

  components: {
    BlogCard,
    FeaturedCard,
  },
};
</script>
