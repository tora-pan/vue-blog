<template>
  <div class="flex flex-col justify-center">
    <!-- Header -->
    <h1 class="text-4xl">My Blog</h1>
    <!-- Featured Blog Post -->
    <div class="w-5/6 mx-auto my-8">
      <FeaturedCard
        v-if="featuredBlog.blogData"
        :imageURL="featuredBlog.blogData.BlogImageURL"
        :title="featuredBlog.blogData.BlogTitle"
        :summary="featuredBlog.blogData.BlogText"
        :dateCreated="featuredBlog.blogData.DateCreated"
        :id="featuredBlog.id"
      />
    </div>
    <!-- Blog Post List -->
    <div class="mx-auto">
      <div class="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="" v-for="post in otherBlogs" :key="post.id">
          <BlogCard
            :imageURL="post.blogData.BlogImageURL"
            :title="post.blogData.BlogTitle"
            :summary="post.blogData.BlogText"
            :dateCreated="post.blogData.DateCreated"
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
// import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      allBlogs: [],
      otherBlogs: [],
      featuredBlog: [],
    };
  },
  created() {
    this.$store.dispatch("newGetAllBlogs").then(
      (response) => {
        this.allBlogs = [...response];
        this.featuredBlog = response[0];
        this.otherBlogs = this.allBlogs.filter(
          (blog) => blog.id !== this.featuredBlog.id
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },

  computed: {
    // ...mapGetters(["getAllBlogs", "getFeaturedBlog"]),
  },

  components: {
    BlogCard,
    FeaturedCard,
  },
};
</script>
