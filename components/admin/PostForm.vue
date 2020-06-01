<template>
  <b-form @submit="onSubmit" v-if="show">
    <b-form-group

      label="Author:"
      label-for="author"
    >
      <b-form-input
        id="author"
        v-model="form.author"
        type="text"
        required
        placeholder="Enter Author"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Title:"
      label-for="title"
      description="Please enter the title of your article."
    >
      <b-form-input
        id="input-1"
        v-model="form.title"
        type="text"
        required
        placeholder="Enter TItle"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your Image Link:"
      label-for="imageLink">
      <b-form-input
        id="imageLink"
        v-model="form.thumbnailLink"
        required
        placeholder="Enter thumbnail link"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Content:"
      label-for="content">
      <b-form-textarea
        id="content"
        v-model="form.content"
        placeholder = "Enter Content"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>


    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button @click="$router.push('/admin')" variant="warning">Cancel</b-button>
  </b-form>
</template>

<script>
    export default {
        name: "PostForm",
      data() {
        return {
          form: this. post ? { ...this.post } : {
            author: '',
            title: '',
            thumbnailLink: 'https://picsum.photos/600/300/?image=',
            content: ''
          },
          show: true
        }
      },
      props: {
          post: {
            type:Object,
            required: false
          }
      },
      computed: {
          checkIfEdit(){

          }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault()
          this.$emit('submit', this.form)
        }
      }
    }
</script>

<style scoped>

</style>
