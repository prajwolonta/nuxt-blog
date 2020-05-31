<template>
    <b-card
      :title="title"
      :img-src="thumbnail"
      :img-alt="title"
      img-top
      tag="article"
      class="mb-2"
    >
      <div class="row mb-3">
        <div class="col-12">
          <b-card-sub-title class="mb-2"><small>Last Updated : 31st May, 2020</small></b-card-sub-title>
        </div>
        <div class="col-12">
          <b-card-sub-title><small>Written By: Prajwol Raj Onta</small></b-card-sub-title>
        </div>
      </div>
      <b-card-text>
        {{ previewText }}
      </b-card-text>

      <b-button :to="postLink" variant="primary">{{ isAdmin ? 'Edit': 'Read more' }} </b-button>
    </b-card>
</template>

<script>
    export default {
        name: "Post",
        props: {
          id: {
            type: Number,
            required: true
          },
          isAdmin: {
            type:Boolean,
            required: false
          },
          title: {
            type: String,
            required: true
          },
          previewText: {
            type: String,
            required: true
          },
          thumbnail: {
            type: String,
            required: true
          }
        },
      computed: {
          postLink(){
            return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
          }
      }
    }
</script>

<style scoped>

</style>
