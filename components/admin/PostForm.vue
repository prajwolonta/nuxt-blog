<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
    <b-button type="reset" variant="danger">Reset</b-button>
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
            thumbnailLink: '',
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
          alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault()
          // Reset our form values
          this.form.author = ''
          this.form.title = ''
          this.form.thumbnailLink = ''
          this.form.content = ''
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    }
</script>

<style scoped>

</style>
