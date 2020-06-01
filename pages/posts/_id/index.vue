<template>
  <div>
    <b-card
      title="This is a test tile"
      :img-src="loadedPost.thumbnailLink"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 100%;"
      class="mb-2"
    >
      <div class="row mb-3">
        <div class="col-6">
          <b-card-sub-title>Last Updated : {{ loadedPost.updatedDate }}</b-card-sub-title>
        </div>
        <div class="col-6">
          <b-card-sub-title class="text-right">Written By: {{ loadedPost.author }}</b-card-sub-title>
        </div>
      </div>
      <b-card-text class="text-justify">
        {{ loadedPost.content }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "index.vue",
        asyncData({params, error}){
          return axios.get('https://nuxt-blog-52706.firebaseio.com/posts/' + params.id + '.json')
          .then(res => {
            return {
              loadedPost: res.data
            }
          })
          .catch(err => error(err))
        }
    }
</script>

<style scoped>

</style>
