<template>
  <div class="row">
    <div class="col-sm-6 mb-4" v-for="post in loadedPosts" :key="post.id"
    >
      <Post
        :id="post.id"
        :title="post.title"
        :thumbnail="post.thumbnailLink"
        :previewText = "post.content"
        :isAdmin = 'true'
      />
    </div>
  </div>
</template>

<script>
  import Post from "~/components/posts/Post";
    export default {
      name: "PostList",
      components: {
        Post
      },
      computed: {
        loadedPosts(){
          console.log(this.$store.getters.loadedPosts);
          return this.$store.getters.loadedPosts
        }
      }
    }
</script>

<style scoped>

</style>
