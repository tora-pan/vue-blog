<template>
  <div class="flex flex-col justify-center">
    <!-- Header -->
    <h1 class="text-4xl">My Blog</h1>
    <!-- Featured Blog Post -->
    <div class="w-5/6 mx-auto my-8">
      <FeaturedCard
        :imageURL="featured.imageURL"
        :title="featured.title"
        :summary="featured.summary"
        :dateCreated="featured.dateCreated"
      />
    </div>
    <!-- Blog Post List -->
    <div class="mx-auto">
      <div class="grid gap-16 grid-cols-3">
        <div class="" v-for="post in testBlogData" :key="post.id">
          <BlogCard
            :imageURL="post.imageURL"
            :title="post.title"
            :summary="post.summary"
            :dateCreated="post.dateCreated"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import FeaturedCard from "../components/FeaturedCard.vue";
export default {
  name: "Home",
  data() {
    return {
      testBlogData: [
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
      featured: {
        imageURL: "https://picsum.photos/1800/300",
        title: "Featured Blog Post Title",
        summary:
          "Here is a bunch of textHere is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summaryHere is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summaryHere is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summaryHere is a bunch of text for a summary Here is a bunch of text for a summary Here is a bunch of text for a summary for a summary Here is a bunch of text for a summary Here is a bunch of text for a summary",
        dateCreated: "2/7/2022",
      },
    };
  },
  components: {
    BlogCard,
    FeaturedCard,
  },
};
</script>
