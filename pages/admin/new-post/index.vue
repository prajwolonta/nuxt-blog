<template>
  <div>
    <PostForm @submit="onSubmitted"/>
  </div>
</template>

<script>
  import axios from 'axios'

  import PostForm from "~/components/admin/PostForm";
  export default {
    components: {PostForm},
    methods: {
      onSubmitted(postData){
        this.$store.dispatch('addPost', postData)
        .then(() => { this.$router.push('/admin' ) })
      }
    }
  }
</script>

<style scoped>

</style>
