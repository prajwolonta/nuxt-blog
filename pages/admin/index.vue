<template>
  <div>
    <h2>Existing Posts</h2>
      <PostList/>
  </div>
</template>

<script>
  import Post from "~/components/posts/Post";
  import PostList from "../../components/posts/PostList";
    export default {
        name: "index",
      components: {PostList, Post},
      component: {
          Post
        }
    }
</script>

<style scoped>

</style>
