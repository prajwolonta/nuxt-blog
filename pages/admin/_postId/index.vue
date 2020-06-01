<template>
    <div>
      <PostForm :post="loadedPost" @submit="postSubmitted"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import PostForm from "../../../components/admin/PostForm";

    export default {
      name: "index",
      components: {PostForm},
      asyncData({params, error}){
        return axios.get('https://nuxt-blog-52706.firebaseio.com/posts/' + params.postId + '.json')
          .then(res => {
            return {
              loadedPost: {...res.data, id: params.postId}
            }
          })
          .catch(err => error(err))
      },
      methods: {
          postSubmitted(editedPost) {
            this.$store.dispatch('editPost', editedPost)
              .then(() => { this.$router.push('/admin' ) })
          }
      }
    }
</script>

<style scoped>

</style>
