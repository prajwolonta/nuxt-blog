<template>
  <div>
    <h2>Existing Posts</h2>
    <div class="row">
      <div class="col-sm-6 mb-4" v-for="i in 16" :key="i">
        <Post
          :id="i"
          :is-admin="true"
          :title="$faker().lorem.sentence()"
          :thumbnail="'https://picsum.photos/600/300/?image=' + i"
          :previewText = "$faker().lorem.sentences(3)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Post from "~/components/posts/Post";
    export default {
        name: "index",
      components: {Post},
      component: {
          Post
        }
    }
</script>

<style scoped>

</style>
