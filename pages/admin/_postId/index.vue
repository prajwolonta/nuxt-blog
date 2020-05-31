<template>
    <div>
      <PostForm :post="loadedPost" />
    </div>
</template>

<script>
    import PostForm from "../../../components/admin/PostForm";
    export default {
        name: "index",
      components: {PostForm},
      data(){
          return{
            loadedPost: {
              author: 'Prajwoj Raj Onta',
              title: 'My awesome post',
              content: 'My content' ,
              thumbnailLink: ''
            }
          }
        }
    }
</script>

<style scoped>

</style>
