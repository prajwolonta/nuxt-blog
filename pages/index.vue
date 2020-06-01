<template>
  <div class="home-page">
    <h1>Get the latest Tech news</h1>
    <section class="featured-posts mt-4">

        <PostList/>

    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

import PostList from "../components/posts/PostList";

export default {
  components: {
    PostList,
    Logo
  },

}
</script>

<style>
</style>
