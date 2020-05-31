<template>
  <div class="home-page">
    <h1>Get the latest Tech news</h1>
    <section class="featured-posts mt-4">
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-4" v-for="post in loadedPosts" :key="post.id"
>
          <Post
            :id="post.id"
            :title="post.title"
            :thumbnail="post.thumbnail"
            :previewText = "post.previewText"
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
  },
  data(){
    return{
      loadedPosts: [
        {
          id: 1,
          title: this.$faker().lorem.sentence(),
          thumbnail:'https://picsum.photos/600/300/?image=1',
          previewText: this.$faker().lorem.sentences(3)
        },
        {
          id: 2,
          title: this.$faker().lorem.sentence(),
          thumbnail:'https://picsum.photos/600/300/?image=2',
          previewText: this.$faker().lorem.sentences(3)
        },
        {
          id: 3,
          title: this.$faker().lorem.sentence(),
          thumbnail:'https://picsum.photos/600/300/?image=3',
          previewText: this.$faker().lorem.sentences(3)
        },
        {
          id: 4,
          title: this.$faker().lorem.sentence(),
          thumbnail:'https://picsum.photos/600/300/?image=4',
          previewText: this.$faker().lorem.sentences(3)
        },
      ]
    }
  }
}
</script>

<style>
</style>
