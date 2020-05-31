<template>
  <div class="home-page">
    <h1>Get the latest Tech news</h1>
    <section class="featured-posts mt-4">
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-4" v-for="i in 3" :key="i">
          <Post
            :id="i"
            :title="$faker().lorem.sentence()"
            :thumbnail="'https://picsum.photos/600/300/?image=' + i"
            :previewText = "$faker().lorem.sentences(3)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Post from "../components/posts/Post";

export default {
  components: {
    Post,
    Logo
  }
}
</script>

<style>
</style>
